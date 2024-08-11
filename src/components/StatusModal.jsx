import PropTypes from "prop-types";

const StatusModal = ({ lastOrder, currentTokens, isOpen, onClose, orderSuccess, savedAddress }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
        {orderSuccess ? (
          <div>
            <h1 className="text-3xl font-semibold">Order Successful!</h1>
            <p>Your order has been placed successfully!</p>
            <div className="grid grid-cols-2">
              {savedAddress && (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
                  <div className="grid grid-cols-3">
                    <p className="text-lg">
                      <strong>Street Address:</strong> {savedAddress.address}
                    </p>
                    <p className="text-lg">
                      <strong>City:</strong> {savedAddress.city}
                    </p>
                    <p className="text-lg">
                      <strong>Postal Code:</strong> {savedAddress.postalCode}
                    </p>
                  </div>
                </div>
              )}
              {lastOrder && (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-2">Order Details</h2>
                  <div className="grid grid-cols-2">
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
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-red-600">Order Failed!</h1>
            <p>Oops! Something went wrong! Try again later.</p>
          </div>
        )}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">
          Back
        </button>
      </div>
    </div>
  );
};

StatusModal.propTypes = {
  lastOrder: PropTypes.shape({
    itemsPrice: PropTypes.string.isRequired,
    shippingPrice: PropTypes.string.isRequired,
    taxPrice: PropTypes.string.isRequired,
    tipsTotal: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }),
  currentTokens: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderSuccess: PropTypes.bool.isRequired,
  savedAddress: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }),
};

export default StatusModal;