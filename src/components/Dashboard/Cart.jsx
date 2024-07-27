import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCartItems } from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <p>Oops! Your cart is empty!</p>
      ) : (
        <ul>
          {cart.cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - {item.qty} x ${item.price}
              <button onClick={() => handleRemoveFromCart(item._id)}>Remove!</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart}>Clear Cart!</button>
    </div>
  );
};

export default Cart;