import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";
import Searchbar from "../components/Dashboard/Searchbar";
import Results from "../components/Dashboard/Results";
import FilterButtons from "../components/Dashboard/FilterButtons";
import Cart from "../components/Dashboard/Cart";
import UserTop from "../components/Dashboard/UserTop";
import FoodCardModal from "../components/FoodCardModal"; // Import the modal
import { useNavigate } from "react-router";

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null); // State to manage the selected food
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const navigate = useNavigate(); // Get navigate function
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const filteredFoods = useSelector((state) => state.foodData.filteredFoods);
  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const handleOpenModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  return (
    <div>
      <UserTop />
      <div className="flex m-auto p-auto justify-center align-middle pt-6">
        <div className="w-1/2">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons />
          <Results
            filteredFoods={filteredFoods}
            status={status}
            error={error}
            onSelectFood={handleOpenModal} // Pass the handler to Results
          />
        </div>
        <div className="w-1/3">
          <Cart />
        </div>
      </div>
      {cartItems.length > 0 ? (
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {isModalOpen && selectedFood && (
        <FoodCardModal
          toggler={handleCloseModal}
          food={selectedFood}
        />
      )}
    </div>
  );
};

export default UserDashboard;
