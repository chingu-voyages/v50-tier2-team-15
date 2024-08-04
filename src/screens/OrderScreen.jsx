import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//Is increaseCurrency import needed?
import { saveShippingAddress, clearCartItems, decreaseCurrency } from "../slices/cartSlice";
import { createOrder } from "../slices/orderSlice";
// import { addDecimals } from "../utils/orderHelper";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || {};
  const { cartItems, shippingAddress, itemsPrice, shippingPrice, taxPrice, totalPrice, currency} = cart;

  const [address, setAddress] = useState(shippingAddress);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("Currency from state:", currency);
  }, [currency]);
  const handleSaveAddress = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
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
      dispatch(decreaseCurrency(totalPrice))
      dispatch(clearCartItems());
      // Redirect to a confirmation page or home page
    });
  }
  else {
    alert("Insufficient currency to complete the purchase.");
  }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Shipping Information</h2>
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
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save Address
          </button>
        </form>
      </div>

      <div className="mb-4">
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <div>
                  <div>{item.dsc}</div>
                <div>From: {item.name}</div>
                <div> Rating: {item.rate}</div>
                </div>
                <div>x {item.qty}</div>
              </div>
            ))}
            <div className="mt-2">
              <h2 className="text-xl font-semibold">Order Details!</h2>
              <div>Items Total: {itemsPrice}</div>
              <div>Shipping Price: {shippingPrice}</div>
              <div>Tax: {taxPrice}</div>
              <div>Current Tokens: {currency}</div>
              <div className="font-bold">Order Total: {totalPrice}</div>
              <div>Tokens after order: {currency - totalPrice}</div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      <button onClick={handleCheckout} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Place Order!
      </button>
    </div>
  );
};

export default OrderScreen;