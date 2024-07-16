import { useEffect, useState } from "react";
import foodMenuFetch from "../foodMenuFetch";

const FoodCard = () => {
  const [foodMenuData, setFoodMenuData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await foodMenuFetch();
      setFoodMenuData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Food Card</h1>
      <h3>This is for individual food.</h3>
      <div>
        {foodMenuData &&
          foodMenuData.map((food) => (
            <div key={food.id}>
              <img src={food.img} alt={food.name} />
              <h4>{food.name}</h4>
              <p>{food.dsc}</p>
              <p>{food.price}</p>
              <p>{food.rate}</p>
              <p>{food.country}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodCard;
