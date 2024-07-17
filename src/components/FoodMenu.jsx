import { useSelector } from "react-redux";

const FoodMenu = ( {selectedCategory} ) => {
  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[selectedCategory] || [];

  return (
    <div>
      <h1>Food Menu</h1>
      {foods.map((food) => (
        <div key={food.id}>
          <img src={food.img} alt={food.name} />
          <h4>{food.name}</h4>
          <p>{food.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;