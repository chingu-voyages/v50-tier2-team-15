import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCartItems, addToCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || {};
  const { cartItems } = cart;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCartItems());
    }
  };

  const handleIncreaseQty = (item) => {
    dispatch(addToCart({ ...item, qty: item.qty + 1 }));
  };

  const handleDecreaseQty = (item) => {
    if (item.qty > 1) {
      dispatch(addToCart({ ...item, qty: item.qty - 1 }));
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-purple mb-6">Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center p-4 bg-white shadow-md rounded-lg mb-4">
            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.dsc}</h2>
              <h3 className="text-sm text-gray-600">From: {item.name}</h3>
              <h3 className="text-sm text-gray-600">Price: ${item.price}</h3>
              <h3 className="text-sm text-gray-600">Quantity: {item.qty}</h3>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDecreaseQty(item)}
                disabled={item.qty <= 1}
                aria-label={`Decrease quantity of ${item.name}`}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <button
                onClick={() => handleIncreaseQty(item)}
                aria-label={`Increase quantity of ${item.name}`}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove Item
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Oops! Your cart is empty!</p>
      )}
      <button onClick={handleClearCart} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;