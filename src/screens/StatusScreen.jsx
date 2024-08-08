import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderSummary from "../components/Orders/OrderSummary";

import PropTypes from "prop-types";

const OrderSuccessMessage = ({ lastOrder }) => (
  <div>
    <h1>Order Successful!</h1>
    <p>Your order has been placed successfully!</p>
    {lastOrder ? (
      <OrderSummary
        itemsPrice={lastOrder.itemsPrice}
        shippingPrice={lastOrder.shippingPrice}
        taxPrice={lastOrder.taxPrice}
        totalPrice={lastOrder.totalPrice}
        currency={lastOrder.currency}
      />
    ) : (
      <p>Loading order details...</p>
    )}
  </div>
);

const OrderFailedMessage = () => (
  <div>
    <h1>Order Failed!</h1>
    <p>Oops! Insufficient tokens to complete purchase!</p>
  </div>
);

const StatusScreen = () => {
  const location = useLocation();
  const { orderSuccess, order } = location.state || {};
  const lastOrder = useSelector((state) => state.orders?.order) || order;

  console.log('Order Success:', orderSuccess);
  console.log('Order from location state:', order);
  console.log('Order from Redux state:', lastOrder);

  return (
    <div>
      {orderSuccess ? (
        <OrderSuccessMessage lastOrder={lastOrder} />
      ) : (
        <OrderFailedMessage />
      )}
    </div>
  );
};

OrderSuccessMessage.propTypes = {
  lastOrder: PropTypes.shape({
    itemsPrice: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    taxPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default StatusScreen;