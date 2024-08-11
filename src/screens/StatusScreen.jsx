import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const StatusScreen = () => {
  const location = useLocation();
  const { orderSuccess, order, savedAddress } = location.state || {};
  const lastOrder = useSelector((state) => state.orders?.order) || order;
  const currentTokens = useSelector((state) => state.auth.userInfo.tokens); // Use tokens from authSlice

  console.log('Order Success:', orderSuccess);
  console.log('Order from location state:', order);
  console.log('Order from Redux state:', lastOrder);
  console.log('Current Tokens:', currentTokens);

  return (
    <div>
      {orderSuccess ? (
        <OrderSuccessMessage lastOrder={lastOrder} currentTokens={currentTokens} savedAddress={savedAddress}/>
      ) : (
        <OrderFailedMessage />
      )}
    </div>
  );
};

const OrderSuccessMessage = ({ lastOrder, currentTokens, savedAddress }) => (
  <div className="p-4">
    <h1 className="text-3xl font-semibold mb-4">Order Successful!</h1>
    <p className="text-lg mb-4">Your order has been placed successfully!</p>
    {savedAddress && (
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
        <p><strong>Street Address:</strong> {savedAddress.address}</p>
        <p><strong>City:</strong> {savedAddress.city}</p>
        <p><strong>Postal Code:</strong> {savedAddress.postalCode}</p>
      </div>
    )}
    {lastOrder ? (
      <div className="space-y-2">
        <p className="text-lg">
          <strong>Items Price:</strong> {lastOrder.itemsPrice}
        </p>
        <p className="text-lg">
          <strong>Shipping Price:</strong> {lastOrder.shippingPrice}
        </p>
        <p className="text-lg">
          <strong>Tax Price:</strong> {lastOrder.taxPrice}
        </p>
        <p className="text-lg">
          <strong>Tip:</strong> {lastOrder.tipsTotal.toFixed(2)}
        </p>
        <p className="text-lg">
          <strong>Order Total:</strong> {lastOrder.totalPrice.toFixed(2)}
        </p>
        <p className="text-lg">
          <strong>Current Tokens:</strong> {currentTokens}
        </p>
      </div>
    ) : (
      <p>Loading order details...</p>
    )}
  </div>
);

const OrderFailedMessage = () => (
  <div className="bg-gray-800 text-white max-w-md mx-auto p-8 rounded-lg">
    <h1 className="text-3xl font-bold mb-4 text-red-600">Order Failed!</h1>
    <p className="text-lg text-gray-300">Oops! Insufficient tokens to complete purchase!</p>
  </div>
);

OrderSuccessMessage.propTypes = {
  lastOrder: PropTypes.shape({
    itemsPrice: PropTypes.string.isRequired,
    shippingPrice: PropTypes.string.isRequired,
    taxPrice: PropTypes.string.isRequired,
    tipsTotal: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  currentTokens: PropTypes.number.isRequired,
  savedAddress: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }),
};

export default StatusScreen;