import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFood } from "../slices/foodDataApiSlice";

const FoodMenu = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[selectedCategory] || [];

  console.log("Foods in selected category:", foods); // Log foods in the selected category

  const handleFoodClick = (food) => {
    dispatch(selectFood(food));
  };

  return (
    <div>
      <h1>Food Menu</h1>
      {foods.map((food) => (
        <div key={food.id}>
          <img src={food.img} alt={food.name} onClick={() => handleFoodClick(food)} />
          <h4>{food.name}</h4>
          <p>{food.price}</p>
        </div>
      ))}
    </div>
  );
};

FoodMenu.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default FoodMenu;