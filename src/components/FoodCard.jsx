import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FoodCard = () => {
  const { id } = useParams();
  const foodData = useSelector((state) => state.foodData.data);
  const food = Object.values(foodData).flat().find((item) => item.id === id);

  if (!food) return <div>Select a food item to see details</div>;

  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
      <div><h1>{food.name}</h1></div>
      <div className="flex flex-row">
        <div className="basis-1/2 grow">
          <img src={food.img} alt={food.name} />
        </div>
        <div>
          <p>{food.dsc}</p>
          <p>{food.price}</p>
          <p>{food.rate}</p>
          <p>{food.country}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;