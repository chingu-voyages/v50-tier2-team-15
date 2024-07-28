import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCartItems, addToCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart) || {};
  const { cartItems } = cart;

  console.log("Cart State:", cart);
  console.log("Cart Items:", cartItems);

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
      {cartItems && cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.dsc}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={() => handleIncreaseQty(item)}>+</button>
            <button onClick={() => handleDecreaseQty(item)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;