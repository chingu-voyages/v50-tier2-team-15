import FoodRibbon from "../components/FoodRibbon";
import FoodMenu from "../components/FoodMenu";
import { useSelector } from "react-redux";
import FoodCard from "../components/FoodCard";

const ShowFoodMenu = () => {
  const selectedCategory = useSelector(state => state.foodData.selectedCategory);
  const selectedFood = useSelector(state => state.foodData.selectedFood);

  return (
    <div>
      <FoodRibbon />
      {selectedCategory && <FoodMenu category={selectedCategory} />}
      {selectedFood && <FoodCard food={selectedFood} />}
    </div>
  );
};

export default ShowFoodMenu;