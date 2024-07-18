import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const FoodMenu = ( {selectedCategory} ) => {
  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[selectedCategory] || [];

  return (
    <div>
      <h1>Food Menu</h1>
      {foods.map((food) => (
        <div key={food.id}>
          <img src={food.img} alt={food.name} />
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