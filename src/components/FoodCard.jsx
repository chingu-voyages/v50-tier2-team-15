import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FoodCard = () => {
  const { id } = useParams();
  const foodData = useSelector((state) => state.foodData.data);
  const food = Object.values(foodData).flat().find((item) => item.id === id);
  if (!food) return <div>Select a food item to see details</div>;

  return (
    <div>
      <div><h1>{food.name}</h1></div>
      <div class="flex flex-row">
      <div class="basis-1/2 grow"><img src={food.img} alt={food.name} /></div>
      <div><p>{food.dsc}</p></div>
      <div><p>{food.price}</p></div>
      <div><p>{food.rate}</p></div>
      <div><p>{food.country}</p></div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;