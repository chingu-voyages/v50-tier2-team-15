import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const FoodRibbon = ({ onCategorySelect }) => {
  const foodData = useSelector((state) => state.foodData.data);

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
     
      {Object.keys(foodData).map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

FoodRibbon.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default FoodRibbon;