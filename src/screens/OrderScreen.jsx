import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  saveShippingAddress,
  clearCartItems,
  decreaseCurrency,
} from "../slices/cartSlice";
import { createOrder } from "../slices/orderSlice";
import { useNavigate } from "react-router-dom";
// add tips
import { setTips } from "../slices/tipsSlice";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Add tips
  const goToAdd = () => {
    navigate("/AddTips");
  };
  const tipsSelected = useSelector((state) => state.tips)
  console.log("tips", tipsSelected)
  
  const cart = useSelector((state) => state.cart) || {};
  const {
    cartItems,
    shippingAddress,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    currency,
  } = cart;

  const [address, setAddress] = useState(shippingAddress || {});
  const [savedAddress, setSavedAddress] = useState(shippingAddress);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("Currency from state:", currency);
  }, [currency]);

  const handleSaveAddress = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
    setSavedAddress(address); // Update the saved address state
  };

  const handleCheckout = () => {
    console.log("Total Price:", totalPrice);
    console.log("Available Currency:", currency);
    const newOrder = {
      id: Date.now(), // Temporary ID for local storage
      cartItems,
      shippingAddress: address,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      createdAt: new Date().toISOString(),
    };
    if (totalPrice <= currency) {
      dispatch(createOrder(newOrder)).then(() => {
        alert("Order placed successfully!");
        dispatch(decreaseCurrency(totalPrice));
        dispatch(clearCartItems());
        // Redirect to a confirmation page or home page
      });
    } else {
      alert("Oops! Insufficient tokens to complete purchase!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <div>
                <div>{item.dsc}</div>
                <div>From: {item.name}</div>
                <div>Rating: {item.rate}</div>
              </div>
              <div>x {item.qty}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}

      <div className="mb-4 flex">
        <div className="flex-1 p-2">
          {savedAddress ? (
            <div>
              <h2 className="text-3xl font-semibold">Shipping Address</h2>
              <p>Address: {savedAddress.address}</p>
              <p>City: {savedAddress.city}</p>
              <p>Postal Code: {savedAddress.postalCode}</p>
            </div>
          ) : (
            <div>
              <p>Enter your shipping address below:</p>
              <form onSubmit={handleSaveAddress} className="space-y-4">
                <input
                  type="text"
                  name="address"
                  value={address.address || ""}
                  onChange={handleAddressChange}
                  placeholder="Address"
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={address.city || ""}
                  onChange={handleAddressChange}
                  placeholder="City"
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  value={address.postalCode || ""}
                  onChange={handleAddressChange}
                  placeholder="Postal Code"
                  className="p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 text-white rounded-full"
                >
                  Save Address
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="flex-1 p-2">
          <div className="mt-2">
            <h2 className="text-3xl font-semibold">Order Details!</h2>
            <div>Items Total: {itemsPrice}</div>
            <div>Shipping Price: {shippingPrice}</div>
            <div>Tax: {taxPrice}</div>
            <div>Current Tokens: {currency}</div>
            <div className="font-bold">Order Total: {totalPrice}</div>
            <div>Tokens after order: {currency - totalPrice}</div>
          </div>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-darkOrange text-white font-bold rounded-full"
          >
            Place Order!
          </button>
          {/* Add tips */}
          <button onClick={goToAdd}
          className="px-4 py-2 bg-darkOrange ml-5 text-white font-bold rounded-full">Addtips</button>
          
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;