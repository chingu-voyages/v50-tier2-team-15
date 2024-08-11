import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCartItems,
  addToCart,
} from "../../slices/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrClear } from "react-icons/gr";



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
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div className="flex-1 px-3">
              <h2 className="text-md font-semibold">{item.dsc}</h2>
              <h3 className="text-sm text-gray-600">From: {item.name}</h3>
              <h3 className="text-sm text-gray-600">Price: ${item.price}</h3>
              <h3 className="text-sm text-gray-600">Quantity: {item.qty}</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 justify-center align-middle">
                <button
                  onClick={() => handleDecreaseQty(item)}
                  disabled={item.qty <= 1}
                  aria-label={`Decrease quantity of ${item.name}`}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncreaseQty(item)}
                  aria-label={`Increase quantity of ${item.name}`}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
                className=" bg-red-500 text-white hover:bg-red-600 rounded-3xl font-semibold flex justify-center"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Oops! Your cart is empty!</p>
      )}
      <button
        onClick={handleClearCart}
        className="my-4 px-4 pt-2 bg-red-500 text-white rounded-3xl hover:bg-red-600 flex justify-center align-middle m-auto p-auto gap-2"
      >
        Clear Cart
        <GrClear className="mt-1"/>
      </button>
    </div>
  );
};

export default Cart;
