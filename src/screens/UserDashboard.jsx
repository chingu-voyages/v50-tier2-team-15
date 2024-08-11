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
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const UserDashboard = () => {
  // const cartItems = useSelector((state) => state.cart.cartItems);
  // const navigate = useNavigate();
  // // const dispatch = useDispatch();

  const handleCheckout = () => {
    // Navigate to the checkout screen
    navigate("/addTips");
  };
  // const handleAddCurrency = (amount) => {
  //   dispatch(increaseCurrency(amount));
  // };

  // const dispatch = useDispatch();
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
      <div className="lg:flex m-auto p-auto justify-center align-middle pt-6 gap-6 px-8">
        <div className="lg:w-3/4">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons />
          <Results
            filteredFoods={filteredFoods}
            status={status}
            error={error}
            onSelectFood={handleOpenModal} // Pass the handler to Results
          />
        </div>
        <div className="lg:w-1/3 pt-6">
          <div>
            <Cart />
          </div>
          <div>
            {cartItems.length > 0 ? (
              <button className="hover:bg-gray-200 transition duration-200 ease-in-out flex justify-center align-middle m-auto p-auto gap-2" onClick={handleCheckout}>Checkout
              <MdOutlineShoppingCartCheckout className="mt-1" />
              </button>
            ) : (
              <p>Your cart is empty.</p>
            )}
            {isModalOpen && selectedFood && (
              <FoodCardModal toggler={handleCloseModal} food={selectedFood} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
