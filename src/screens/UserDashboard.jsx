// Dump components in here.
// We need a cart. We need the FoodRibbon. We need the FoodMenu.
// Should the ShowFoodMenu.jsx in the screens folder just be a component?????

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Dashboard/Cart";
import UserTop from "../components/Dashboard/UserTop";
// import { increaseCurrency } from "../slices/cartSlice";

const UserDashboard = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleCheckout = () => {
    // Navigate to the checkout screen
    navigate("/addTips");
  };
  // const handleAddCurrency = (amount) => {
  //   dispatch(increaseCurrency(amount));
  // };
  return (
    <div>
      {/* <h1>UserDashboard</h1> */}
      <UserTop />
      {/* <button onClick={() => handleAddCurrency(50)}>Add 50</button>
      <button onClick={() => handleAddCurrency(100)}>Add 100</button>
      <button onClick={() => handleAddCurrency(150)}>Add 150</button> */}
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