import PropTypes from 'prop-types';

const OrderSummary = ({
  itemsPrice,
  shippingPrice,
  taxPrice,
  tipsTotal,
  totalPrice,
  currency,
  onCheckout,
  isAddressProvided
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
      <p>Items Price: {itemsPrice}</p>
      <p>Shipping Price: {shippingPrice}</p>
      <p>Tax Price: {taxPrice}</p>
      <p>Tip: {tipsTotal ? tipsTotal.toFixed(2) : "0.00"}</p>
      <p>Current Tokens: {currency}</p>
      <div className="font-bold">Order Total: {totalPrice}</div>
      <div>Tokens after order: {currency - totalPrice}</div>
      <button
        onClick={onCheckout}
        className={`px-4 py-2 ${isAddressProvided ? 'bg-darkOrange' : 'bg-gray-500'} text-white font-bold rounded-full`}
        disabled={!isAddressProvided}
      >
        Place Order
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  itemsPrice: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
  taxPrice: PropTypes.string.isRequired,
  tipsTotal: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
  isAddressProvided: PropTypes.bool.isRequired
};

export default OrderSummary;