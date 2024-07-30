// Dump components in here.
// We need a cart. We need the FoodRibbon. We need the FoodMenu.
// Should the ShowFoodMenu.jsx in the screens folder just be a component?????

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Dashboard/Cart";

const UserDashboard = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the checkout screen
    navigate("/checkout");
  };

  return (
    <div>
      <h1>UserDashboard</h1>
      <Cart />
      {cartItems.length > 0 ? (
        <button onClick={handleCheckout}>Checkout</button>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default UserDashboard;