import PropTypes from 'prop-types';
import { addDecimals } from '../../utils/cartUtils'; // Import addDecimals to use for consistent formatting

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
  // Parse values to numbers for comparison
  const itemsPriceNum = parseFloat(itemsPrice);
  const shippingPriceNum = parseFloat(shippingPrice);
  const taxPriceNum = parseFloat(taxPrice);
  const totalPriceNum = parseFloat(totalPrice);
  const currencyNum = parseFloat(currency);

  // Check if tokens are sufficient
  const isTokensSufficient = currencyNum >= totalPriceNum;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
      <p>Items Price: {addDecimals(itemsPriceNum)}</p>
      <p>Shipping Price: {addDecimals(shippingPriceNum)}</p>
      <p>Tax Price: {addDecimals(taxPriceNum)}</p>
      <p>Tip: {tipsTotal ? addDecimals(parseFloat(tipsTotal)) : "0.00"}</p>
      <p>Current Tokens: {addDecimals(currencyNum)}</p>
      <div className="font-bold">Order Total: {addDecimals(totalPriceNum)}</div>
      <div>Tokens after order: {addDecimals(currencyNum - totalPriceNum)}</div>

      {!isTokensSufficient ? (
        <p className="text-red-600 font-semibold mt-4">
          Oops! Not enough tokens to complete the order!
        </p>
      ) : (
        <button
          onClick={onCheckout}
          className={`px-4 py-2 ${isAddressProvided ? 'bg-darkOrange' : 'bg-gray-500'} text-white font-bold rounded-full mt-4`}
          disabled={!isAddressProvided}
        >
          Place Order
        </button>
      )}
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