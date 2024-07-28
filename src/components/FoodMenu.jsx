import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectFood } from "../slices/foodDataApiSlice";
import { addToCart } from "../slices/cartSlice"; // Import addToCart action

const FoodMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();
    // Get the userInfo from the auth state. The userInfo has the username.
  const { userInfo } = useSelector((state) => state.auth);
  // Get the food data from the store state.
  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[category] || [];

  const handleFoodClick = (food) => {
    dispatch(selectFood(food));
    navigate(`/food/${food.id}`);
  };

  const handleAddToCart = (food, e) => {
    e.stopPropagation(); // Prevents triggering the handleFoodClick when adding to cart
    dispatch(addToCart({ ...food, qty: 1 })); // Add food item to cart with initial quantity of 1
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer h-80 relative"
            onClick={() => handleFoodClick(food)}
          >
            <img
              src={food.img}
              alt={food.dsc}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-lg font-semibold mb-2">{food.dsc}</h4>
                <p className="text-gray-600 mb-4">Price: {food.price}</p>
              </div>
              {userInfo ? (
      <button
        onClick={(e) => handleAddToCart(food, e)}
        className="absolute bottom-4 right-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
      >
        +
      </button>
    ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FoodMenu.propTypes = {
  selectedCategory: PropTypes.string,
};

export default FoodMenu;