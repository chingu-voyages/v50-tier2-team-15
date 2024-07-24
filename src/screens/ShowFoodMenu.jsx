import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectFood } from "../slices/foodDataApiSlice";

const ShowFoodMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[category] || [];

  const handleFoodClick = (food) => {
    dispatch(selectFood(food));
    navigate(`/food/${food.id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food.id}
            onClick={() => handleFoodClick(food)}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold mb-1">{food.name}</h4>
            <p className="text-gray-700">${food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ShowFoodMenu.propTypes = {
  selectedCategory: PropTypes.string,
};

export default ShowFoodMenu;