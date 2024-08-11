import PropTypes from "prop-types";

const StatusModal = ({ isOpen, onClose, orderSuccess, order, savedAddress }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
        {orderSuccess ? (
          <div>
            <h1 className="text-3xl font-semibold">Order Successful!</h1>
            <p>Your order has been placed successfully!</p>
            {savedAddress && (
              <div>
                <h2 className="text-xl font-semibold">Shipping Address</h2>
                <p><strong>Street Address:</strong> {savedAddress.address}</p>
                <p><strong>City:</strong> {savedAddress.city}</p>
                <p><strong>Postal Code:</strong> {savedAddress.postalCode}</p>
              </div>
            )}
            {order && (
              <div>
                <h2 className="text-xl font-semibold">Order Details</h2>
                <p><strong>Items Price:</strong> {order.itemsPrice}</p>
                <p><strong>Shipping Price:</strong> {order.shippingPrice}</p>
                <p><strong>Tax Price:</strong> {order.taxPrice}</p>
                <p><strong>Tip:</strong> {order.tipsTotal.toFixed(2)}</p>
                <p><strong>Order Total:</strong> {order.totalPrice.toFixed(2)}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-red-600">Order Failed!</h1>
            <p>Oops! Something went wrong! Try again later.</p>
          </div>
        )}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

StatusModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderSuccess: PropTypes.bool,
  order: PropTypes.shape({
    itemsPrice: PropTypes.string.isRequired,
    shippingPrice: PropTypes.string.isRequired,
    taxPrice: PropTypes.string.isRequired,
    tipsTotal: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }),
  savedAddress: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }),
};

export default StatusModal;