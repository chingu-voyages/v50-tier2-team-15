// Dump components in here.
// We need a cart. We need the FoodRibbon. We need the FoodMenu.
// Should the ShowFoodMenu.jsx in the screens folder just be a component?????
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";
import Searchbar from "../components/Dashboard/Searchbar";
import Results from "../components/Dashboard/Results";
import FilterButtons from "../components/Dashboard/FilterButtons";
// import { useSelector } from "react-redux";
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
    navigate("/checkout");
  };
  // const handleAddCurrency = (amount) => {
  //   dispatch(increaseCurrency(amount));
  // };

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);
  const filteredFoods = useSelector((state) => state.foodData.filteredFoods);
  return (
    <div>
      {/* <h1>UserDashboard</h1> */}
      <UserTop />
      <div className="flex m-auto p-auto justify-center align-middle pt-6">
        <div className="w-1/2">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons />
          <Results
            filteredFoods={filteredFoods}
            status={status}
            error={error}
          />
        </div>
        <div className="w-1/3">
          <Cart />
        </div>
      </div>
      {/* <button onClick={() => handleAddCurrency(50)}>Add 50</button>
      <button onClick={() => handleAddCurrency(100)}>Add 100</button>
      <button onClick={() => handleAddCurrency(150)}>Add 150</button> */}

      {cartItems.length > 0 ? (
        <button onClick={handleCheckout}>Checkout</button>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default UserDashboard;
