import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { saveShippingAddress, clearCartItems } from "../slices/cartSlice";
import { createOrder } from "../slices/orderSlice";
// import { addDecimals } from "../utils/orderHelper";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || {};
  const { cartItems, shippingAddress, itemsPrice, shippingPrice, taxPrice, totalPrice } = cart;

  const [address, setAddress] = useState(shippingAddress);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
  };

  const handleCheckout = () => {
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

    dispatch(createOrder(newOrder)).then(() => {
      alert("Order placed successfully!");
      dispatch(clearCartItems());
      // Redirect to a confirmation page or home page
    });
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
        <h2 className="text-xl font-semibold">Cart Summary</h2>
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <div>{item.name}</div>
                <div>${item.price} x {item.qty}</div>
              </div>
            ))}
            <div className="mt-2">
              <div>Items Price: ${itemsPrice}</div>
              <div>Shipping Price: ${shippingPrice}</div>
              <div>Tax Price: ${taxPrice}</div>
              <div className="font-bold">Total Price: ${totalPrice}</div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      <button onClick={handleCheckout} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Complete Purchase
      </button>
    </div>
  );
};

export default OrderScreen;