import PropTypes from "prop-types";

const StatusModal = ({ lastOrder, currentTokens, isOpen, onClose, orderSuccess, savedAddress }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg md:max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-4">Debug Information</h1>
          <p>Last Order: {JSON.stringify(lastOrder)}</p>
          <p>Current Tokens: {currentTokens}</p>
        </div>
        {orderSuccess ? (
          <div>
            <h1 className="text-3xl font-semibold text-center mb-4">Order Successful!</h1>
            <p className="text-center mb-6">Your order has been placed successfully!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {savedAddress && (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
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
            <h1 className="text-3xl font-bold text-red-600 text-center">Order Failed!</h1>
            <p className="text-center">Oops! Something went wrong! Try again later.</p>
          </div>
        )}
        <button onClick={onClose} className="mt-6 px-4 py-2 bg-gray-700 text-white rounded w-full sm:w-auto">
          Back
        </button>
      </div>
    </div>
  );
};

// const StatusModal = ({ lastOrder, currentTokens, isOpen, onClose, orderSuccess, savedAddress }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div className="bg-white p-6 rounded-lg w-full max-w-lg md:max-w-2xl mx-auto">
//         {orderSuccess ? (
//           <div>
//             <h1 className="text-3xl font-semibold text-center mb-4">Order Successful!</h1>
//             <p className="text-center mb-6">Your order has been placed successfully!</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {savedAddress && (
//                 <div className="space-y-2">
//                   <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
//                   <div className="space-y-1">
//                     <p className="text-lg">
//                       <strong>Street Address:</strong> {savedAddress.address}
//                     </p>
//                     <p className="text-lg">
//                       <strong>City:</strong> {savedAddress.city}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Postal Code:</strong> {savedAddress.postalCode}
//                     </p>
//                   </div>
//                 </div>
//               )}
//               {lastOrder && (
//                 <div className="space-y-2">
//                   {console.log("Last order details:", lastOrder)}
//                   <h2 className="text-xl font-semibold mb-2">Order Details</h2>
//                   <div className="space-y-1">
//                     <p className="text-lg">
//                       <strong>Items Price:</strong> {lastOrder.itemsPrice}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Shipping Price:</strong> {lastOrder.shippingPrice}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Tax Price:</strong> {lastOrder.taxPrice}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Tip:</strong> {lastOrder.tipsTotal.toFixed(2)}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Order Total:</strong> {lastOrder.totalPrice.toFixed(2)}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Current Tokens:</strong> {currentTokens}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h1 className="text-3xl font-bold text-red-600 text-center">Order Failed!</h1>
//             <p className="text-center">Oops! Something went wrong! Try again later.</p>
//           </div>
//         )}
//         <button onClick={onClose} className="mt-6 px-4 py-2 bg-gray-700 text-white rounded w-full sm:w-auto">
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

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
};

export default StatusModal;