import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCartItems, decreaseCurrency } from "../slices/cartSlice";
import { createOrder } from "../slices/orderSlice";
import AddressForm from "../components/Orders/AddressForm";
import CartItems from "../components/Orders/CartItems";
import OrderSummary from "../components/Orders/OrderSummary";

const OrderScreen = () => {
  const dispatch = useDispatch();
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

  const [savedAddress, setSavedAddress] = useState(shippingAddress);
  
  useEffect(() => {
    console.log("Currency from state:", currency);
  }, [currency]);
  // add tips
  const tipsPercentage = useSelector((state) => state.tips.tips)
  const tipsTotal = (tipsPercentage/100) * itemsPrice
  console.log("tipspercentage", tipsPercentage)
  console.log("tipstotal", tipsTotal)
  console.log("items", itemsPrice)
  const handleCheckout = () => {
    console.log("Total Price:", totalPrice);
    console.log("Available Currency:", currency);
    const newOrder = {
      id: Date.now(),
      cartItems,
      shippingAddress: savedAddress,
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
      });
    } else {
      alert("Oops! Insufficient tokens to complete purchase!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      {cartItems && cartItems.length > 0 ? (
        <CartItems items={cartItems} />
      ) : (
        <p>Your cart is empty!</p>
      )}
      <div className="mb-4 flex">
        <div className="flex-1 p-2">
          <h2 className="text-3xl font-semibold">Shipping Address</h2>
          <p>Enter your shipping address below:</p>
          <AddressForm initialAddress={shippingAddress} onSave={setSavedAddress} />
        </div>
        <div className="flex-1 p-2">
          <OrderSummary
            itemsPrice={itemsPrice}
            shippingPrice={shippingPrice}
            taxPrice={taxPrice}
            totalPrice={totalPrice}
            currency={currency}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;