import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSuccessMessage = ({ lastOrder, currentTokens }) => (
  <div className="p-4">
    <h1 className="text-3xl font-semibold mb-4">Order Successful!</h1>
    <p className="text-lg mb-4">Your order has been placed successfully!</p>
    {lastOrder ? (
      <div className="space-y-2">
        <p className="text-lg">
          <strong>Items Price:</strong> ${lastOrder.itemsPrice}
        </p>
        <p className="text-lg">
          <strong>Shipping Price:</strong> ${lastOrder.shippingPrice}
        </p>
        <p className="text-lg">
          <strong>Tax Price:</strong> ${lastOrder.taxPrice}
        </p>
        <p className="text-lg">
          <strong>Tip:</strong> ${lastOrder.tipsTotal.toFixed(2)}
        </p>
        <p className="text-lg">
          <strong>Order Total:</strong> ${lastOrder.totalPrice.toFixed(2)}
        </p>
        <p className="text-lg">
          <strong>Current Tokens:</strong> ${currentTokens}
        </p>
      </div>
    ) : (
      <p>Loading order details...</p>
    )}
  </div>
);

const OrderFailedMessage = () => (
  <div>
    <h1 className="text-3xl font-semibold mb-4">Order Failed!</h1>
    <p className="text-lg mb-4">Oops! Insufficient tokens to complete purchase!</p>
  </div>
);

const StatusScreen = () => {
  const location = useLocation();
  const { orderSuccess, order } = location.state || {};
  const lastOrder = useSelector((state) => state.orders?.order) || order;
  const currentTokens = useSelector((state) => state.cart.currency);

  console.log('Order Success:', orderSuccess);
  console.log('Order from location state:', order);
  console.log('Order from Redux state:', lastOrder);
  console.log('Current Tokens:', currentTokens);

  return (
    <div>
      {orderSuccess ? (
        <OrderSuccessMessage lastOrder={lastOrder} currentTokens={currentTokens} />
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
    tipsTotal: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  currentTokens: PropTypes.number.isRequired,
};

export default StatusScreen;