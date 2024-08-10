import PropTypes from 'prop-types';

const OrderSummary = ({
  itemsPrice,
  shippingPrice,
  taxPrice,
  tipsTotal,
  totalPrice,
  currency,
  onCheckout,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
      <p>Items Price: ${itemsPrice}</p>
      <p>Shipping Price: ${shippingPrice}</p>
      <p>Tax Price: ${taxPrice}</p>
      <p>Tip: ${tipsTotal.toFixed(2)}</p>
      <p>Current Tokens: ${currency}</p>
      <div className="font-bold">Order Total: ${totalPrice}</div>
      <div>Tokens after order: {currency - totalPrice}</div>
      <button onClick={onCheckout} className="px-4 py-2 bg-darkOrange text-white font-bold rounded-full">
        Checkout
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  itemsPrice: PropTypes.number.isRequired,
  shippingPrice: PropTypes.number.isRequired,
  taxPrice: PropTypes.number.isRequired,
  tipsTotal: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default OrderSummary;