import { useEffect, useState } from 'react';
import foodMenuFetch from '../utils/foodMenuFetch';

const FoodMenu = ({ category, onFoodSelect }) => {
  const [foodMenuData, setFoodMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await foodMenuFetch();
      if (Array.isArray(data[category])) {
        setFoodMenuData(data[category]);
      } else {
        console.error(`Category '${category}' not found in data:`, data);
        setFoodMenuData([]);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div>
        {foodMenuData.map((food) => (
          <div key={food.id} onClick={() => onFoodSelect(food)}>
            <img src={food.img} alt={food.name} />
            <h4>{food.name}</h4>
            <p>{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;