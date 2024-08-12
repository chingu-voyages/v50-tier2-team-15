import PropTypes from "prop-types";

const StatusModal = ({
  lastOrder,
  currentTokens,
  isOpen,
  onClose,
  orderSuccess,
  savedAddress,
  cartItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen w-screen bg-black z-10 top-0 opacity-100">
      <div className="relative bg-white p-6 rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-900 text-2xl"
        >
          X
        </button>
        {orderSuccess ? (
          <div>
            <h1 className="text-3xl font-semibold text-center mb-4">
              Order Successful!
            </h1>
            <p className="text-center mb-6">
              Your order has been placed successfully!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedAddress && (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-2">
                    Shipping Address
                  </h2>
                  <div className="space-y-1">
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
                  <div className="space-y-1">
                    <p className="text-lg">
                      <strong>Tip:</strong> {lastOrder.tipsTotal.toFixed(2)}
                    </p>
                    <p className="text-lg">
                      <strong>Order Total:</strong>{" "}
                      {lastOrder.totalPrice.toFixed(2)}
                    </p>
                    <p className="text-lg">
                      <strong>Current Tokens:</strong> {currentTokens}
                    </p>
                  </div>
                </div>
              )}
              {cartItems && cartItems.length > 0 && (
                <div className="space-y-2">
                  {cartItems.map((item, index) => (
                    <div key={index} className="text-lg">
                      {item.dsc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-red-600 text-center">
              Order Failed!
            </h1>
            <p className="text-center">
              Oops! Something went wrong! Try again later.
            </p>
          </div>
        )}
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
    totalPrice: PropTypes.string.isRequired,
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
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default StatusModal;