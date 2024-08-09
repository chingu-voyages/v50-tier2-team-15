import PropTypes from 'prop-types';

const OrderSummary = ({ itemsPrice, shippingPrice, taxPrice, totalPrice, currency, onCheckout }) => {
  return (
    <div className="mt-2">
      <h2 className="text-3xl font-semibold">Order Details!</h2>
      <div>Items Total: {itemsPrice}</div>
      <div>Shipping Price: {shippingPrice}</div>
      <div>Tax: {taxPrice}</div>
      <div>Current Tokens: {currency}</div>
      <div className="font-bold">Order Total: {totalPrice}</div>
      <div>Tokens after order: {currency - totalPrice}</div>
      <button
        onClick={onCheckout}
        className="px-4 py-2 bg-darkOrange text-white font-bold rounded-full"
      >
        Place Order!
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  itemsPrice: PropTypes.number.isRequired,
  shippingPrice: PropTypes.number.isRequired,
  taxPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default OrderSummary;