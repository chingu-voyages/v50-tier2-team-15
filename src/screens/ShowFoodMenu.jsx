import FoodRibbon from '../components/FoodRibbon';
import FoodMenu from '../components/FoodMenu';
import { useSelector } from 'react-redux';

const ShowFoodMenu = () => {
  const selectedCategory = useSelector(state => state.food.selectedCategory);
  return (
    <div>
      <FoodRibbon />
      {selectedCategory && <FoodMenu category={selectedCategory} />}
    </div>
  );
};

export default ShowFoodMenu;