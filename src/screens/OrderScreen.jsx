import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decreaseTokens } from "../slices/authSlice";
import { createOrder, fetchOrder } from "../slices/orderSlice";
import { resetCart } from "../slices/cartSlice";
import AddressForm from "../components/Orders/AddressForm";
import CartItems from "../components/Orders/CartItems";
import OrderSummary from "../components/Orders/OrderSummary";
import StatusModal from "../components/StatusModal";
import useToggle from "../utils/useToggle";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart) || {};
  const tipsPercentage = useSelector((state) => state.tips.tips);
  const currency = useSelector((state) => state.auth.userInfo.tokens);
  const lastOrder = useSelector((state) => state.orders.order);

  const [savedAddress, setSavedAddress] = useState(cart.shippingAddress);
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { on: showStatusModal, toggler: toggleStatusModal } = useToggle();

  useEffect(() => {
    if (lastOrder) {
      console.log("Last Order from Redux:", lastOrder);
    }
  }, [lastOrder]);

  const tipsTotal = tipsPercentage ? (tipsPercentage / 100) * cart.itemsPrice : 0;
  const totalPriceWithTips = parseFloat(cart.totalPrice) + parseFloat(tipsTotal || 0);

  const handleCheckout = () => {
    if (!savedAddress || Object.keys(savedAddress).length === 0) {
      setErrorMessage("Please provide a shipping address before placing an order!");
      return;
    }

    setErrorMessage("");

    const newOrder = {
      id: Date.now(),
      cartItems: cart.cartItems,
      shippingAddress: savedAddress,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      tipsTotal,
      totalPrice: totalPriceWithTips,
      createdAt: new Date().toISOString(),
    };

    if (totalPriceWithTips <= currency) {
      dispatch(createOrder(newOrder)).then(() => {
        dispatch(decreaseTokens(totalPriceWithTips));
        setOrderDetails({
          orderSuccess: true,
          order: newOrder,
          savedAddress,
        });
        toggleStatusModal(true);
      });
    } else {
      setOrderDetails({
        orderSuccess: false,
        savedAddress,
      });
      toggleStatusModal(true);
    }
  };

  const handleBack = (success) => {
    if (success) {
      dispatch(resetCart());
    }
    navigate("/user");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Checkout</h1>
      {cart.cartItems && cart.cartItems.length > 0 ? (
        <CartItems items={cart.cartItems} />
      ) : (
        <p>Your cart is empty!</p>
      )}
      <div className="flex flex-col xl:flex-row mb-4">
        <div className="flex-1 p-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Shipping Address</h2>
          <p className="text-sm md:text-base">Enter your shipping address below:</p>
          <AddressForm initialAddress={cart.shippingAddress} onSave={setSavedAddress} />
        </div>
        <div className="flex-1 p-2 mt-4 xl:mt-0">
          <OrderSummary
            itemsPrice={cart.itemsPrice}
            shippingPrice={cart.shippingPrice}
            taxPrice={cart.taxPrice}
            tipsTotal={tipsTotal}
            totalPrice={totalPriceWithTips}
            currency={currency}
            onCheckout={handleCheckout}
            isAddressProvided={!!savedAddress && Object.keys(savedAddress).length > 0}
          />
        </div>
      </div>
      {showStatusModal && (
        <StatusModal
          isOpen={showStatusModal}
          onClose={() => handleBack(orderDetails?.orderSuccess)}
          lastOrder={lastOrder}
          currentTokens={currency}
          {...orderDetails}
          cartItems={cart.cartItems}
        />
      )}
    </div>
  );
};

export default OrderScreen;