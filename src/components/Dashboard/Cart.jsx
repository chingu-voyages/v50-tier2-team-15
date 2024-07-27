import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCartItems, addToCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCartItems());
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
      <h2>Shopping Cart</h2>
      {!cart || !cart.cartItems || cart.cartItems.length === 0 ? (
        <p>Oops! Your cart is empty!</p>
      ) : (
        <ul>
          {cart.cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - {item.qty} x ${item.price}
              <button onClick={() => handleIncreaseQty(item)}>+</button>
              <button onClick={() => handleDecreaseQty(item)}>-</button>
              <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;