import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFood } from "../slices/foodDataApiSlice";

const FoodMenu = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[selectedCategory] || [];

  console.log("Foods in selected category:", foods); // Log foods in the selected category

  const handleFoodClick = (food) => {
    dispatch(selectFood(food));
    navigate(`/food/${food.id}`);
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
        </div>
      ))}
    </div>
  );
};

FoodMenu.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default FoodMenu;
