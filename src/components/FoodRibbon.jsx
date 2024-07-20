import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";

const FoodRibbon = ({ onCategorySelect }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);

  console.log("Food Data:", foodData); // Log fetched data
  console.log("Fetch Status:", status); // Log fetch status
  if (error) console.log("Fetch Error:", error); // Log any fetch errors

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      <h1>Food Ribbon</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching data</p>}
      {status === "succeeded" && Object.keys(foodData).map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

FoodRibbon.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default FoodRibbon;