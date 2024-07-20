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
      <h1>{food.name}</h1>
      <img src={food.img} alt={food.name} />
      <p>{food.dsc}</p>
      <p>{food.price}</p>
      <p>{food.rate}</p>
      <p>{food.country}</p>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;