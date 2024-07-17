const FoodCard = ({ food }) => {
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

export default FoodCard;