import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectFood } from "../slices/foodDataApiSlice";
import { addToCart } from "../slices/cartSlice"; // Import addToCart action

const FoodMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

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
    <div className="cursor-pointer sm:p-2 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-1 transition-shadow duration-200 group">
      <h1>Food Menu</h1>
      {foods.map((food) => (
        <div key={food.id} onClick={() => handleFoodClick(food)}>
          <img
            src={food.img}
            width={342}
            height={542}
            alt={food.name}
            className="group-hover:opacity-80 transition-opacity duration-200"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h4>{food.name}</h4>
          <p>{food.price}</p>
          <button onClick={(e) => handleAddToCart(food, e)} className="add-to-cart-button">
            +
          </button>
        </div>
      ))}
    </div>
  );
};

FoodMenu.propTypes = {
  selectedCategory: PropTypes.string,
};

export default FoodMenu;