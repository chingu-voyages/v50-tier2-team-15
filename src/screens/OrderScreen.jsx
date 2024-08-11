import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { decreaseTokens } from "../slices/authSlice";
import { createOrder } from "../slices/orderSlice";
import { resetCart } from "../slices/cartSlice";

import AddressForm from "../components/Orders/AddressForm";
import CartItems from "../components/Orders/CartItems";
import OrderSummary from "../components/Orders/OrderSummary";

import StatusModal from "../components/StatusModal"; // Import StatusModal
import useToggle from "../utils/useToggle";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || {};
  const tipsPercentage = useSelector((state) => state.tips.tips);
  const currency = useSelector((state) => state.auth.userInfo.tokens); // Use tokens from authSlice

  const navigate = useNavigate();

  const {
    cartItems,
    shippingAddress,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = cart;

  const [savedAddress, setSavedAddress] = useState(shippingAddress);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);

  const { on: showStatusModal, toggler: toggleStatusModal } = useToggle();

  useEffect(() => {
    console.log("Currency from state:", currency);
  }, [currency]);

  // add tips
  // Calculate the tip total based on the itemsPrice
  const tipsTotal = tipsPercentage ? (tipsPercentage / 100) * itemsPrice : 0;
  console.log("tipspercentage", tipsPercentage);
  console.log("tipstotal", tipsTotal);
  console.log("items", itemsPrice);

  // Calculate the new total price including tips
  const totalPriceWithTips =
    parseFloat(totalPrice) + parseFloat(tipsTotal || 0);

  const handleCheckout = () => {
    if (!savedAddress || Object.keys(savedAddress).length === 0) {
      setErrorMessage(
        "Please provide a shipping address before placing an order!"
      );
      return;
    }

    setErrorMessage(""); // Clear any previous errors

    console.log("Total Price with Tips:", totalPriceWithTips);
    console.log("Available Currency:", currency);

    const newOrder = {
      id: Date.now(),
      cartItems,
      shippingAddress: savedAddress,
      itemsPrice,
      shippingPrice,
      taxPrice,
      tipsTotal, // Add the tips amount to the order
      totalPrice: totalPriceWithTips, // Update the total price with tips
      createdAt: new Date().toISOString(),
    };

    if (totalPriceWithTips <= currency) {
      dispatch(createOrder(newOrder)).then(() => {
        console.log("Order placed successfully!");

        // Decrease tokens after successfully creating the order
        dispatch(decreaseTokens(totalPriceWithTips));

        setOrderDetails({
          orderSuccess: true,
          order: newOrder,
          savedAddress: savedAddress,
        });
        toggleStatusModal(true);
      });
    } else {
      setOrderDetails({
        orderSuccess: false,
        savedAddress: savedAddress,
      });
      toggleStatusModal(true);
    }
  };

  const handleBack = (success) => {
    if (success) {
      // Reset cart or any other necessary action
      dispatch(resetCart());
    }
    navigate("/user");
  }

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
            <AddressForm
              initialAddress={shippingAddress}
              onSave={setSavedAddress}
            />
          </div>
          <div className="flex-1 p-2">
            <OrderSummary
              itemsPrice={itemsPrice}
              shippingPrice={shippingPrice}
              taxPrice={taxPrice}
              tipsTotal={tipsTotal} // Pass the tips total to the OrderSummary
              totalPrice={totalPriceWithTips} // Pass the updated total price
              currency={currency}
              onCheckout={handleCheckout}
              isAddressProvided={
                !!savedAddress && Object.keys(savedAddress).length > 0
              }
            />
          </div>
        </div>
        {showStatusModal && (
          <StatusModal
            isOpen={showStatusModal}
            onClose={() => handleBack(orderDetails?.orderSuccess)}
            {...orderDetails}
          />
        )}
      </div>
    );
  };

export default OrderScreen;
