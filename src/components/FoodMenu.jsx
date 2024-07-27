import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// Importing the action creator for selecting a food item
import { selectFood } from "../slices/foodDataApiSlice";


const ShowFoodMenu = () => {
  // Hooks for dispatching actions, navigating programmatically, and accessing URL parameters
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams(); // Extracting the 'category' parameter from the URL

  // Fetching food data from the Redux store and filtering based on the current category
  const foodData = useSelector((state) => state.foodData.data);
  const foods = foodData[category] || []; // Default to an empty array if the category is not found

  // Handler function for clicking on a food item
  const handleFoodClick = (food) => {
    dispatch(selectFood(food)); // Dispatching an action to select the clicked food item
    navigate(`/food/${food.id}`); // Navigating to the food detail page using the food item's ID
  };

  // Rendering the food menu UI
  return (
    <div className="cursor-pointer sm:p-2 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-1 transition-shadow duration-200 group">
      <h1>Food Menu</h1>
      {foods.map((food) => (
        <div key={food.id} onClick={() => handleFoodClick(food)}>
          <img
            src={food.img} // Displaying the food item's image
            width={342}
            height={542}
            alt={food.name} // Providing an alt text for the image
            className="group-hover:opacity-80 transition-opacity duration-200"
            style={{ maxWidth: "100%", height: "auto" }} // Ensuring the image is responsive
          />
          <h4>{food.name}</h4>
          <p>{food.price}</p>
        </div>
      ))}
    </div>
  );
};

// Defining PropTypes for the component to ensure proper usage
ShowFoodMenu.propTypes = {
  selectedCategory: PropTypes.string, // This prop seems to be unused and might be a leftover or mistake
};

// Exporting the component for use in other parts of the application
export default ShowFoodMenu;