import { useSelector } from "react-redux";

const FoodRibbon = ({ onCategorySelect }) => {
  const foodData = useSelector((state) => state.foodData.data);

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      <h1>Food Ribbon</h1>
      {Object.keys(foodData).map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default FoodRibbon;