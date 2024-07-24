import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// Imports the action creator for fetching food data from the Redux slice
import { fetchFoodData } from "../slices/foodDataApiSlice";

// Defines the FoodRibbon component with a prop for handling category selection
const FoodRibbon = ({ onCategorySelect }) => {
  // Initializes Redux dispatch function
  const dispatch = useDispatch();
  // Creates a ref object for the ribbon container to manage its scroll position
  const ribbonRef = useRef(null);
  // State to track the scroll position of the ribbon
  const [scrollAmount, setScrollAmount] = useState(0);

  // Fetches food data on component mount
  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  // Retrieves food data and its status from Redux store
  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);

  // List of categories to be displayed in the ribbon
  const desiredCategories = [
    "bbqs", "best-foods", "breads", "burgers",
    "chocolates", "desserts", "drinks", "fried-chicken",
    "ice-cream", "pizzas", "porks", "sandwiches",
    "sausages", "steaks"
  ];

  // Filters the categories from the fetched data based on the desired categories
  const filteredCategories = Object.keys(foodData).filter(category =>
    desiredCategories.includes(category)
  );

  // Handles category selection, calling the passed in onCategorySelect function
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  // Scrolls the ribbon to the left
  const scrollLeft = () => {
    setScrollAmount((prev) => Math.max(prev - 200, 0));
  };

  // Scrolls the ribbon to the right
  const scrollRight = () => {
    const container = ribbonRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollAmount((prev) => Math.min(prev + 200, maxScroll));
  };

  // Renders the component
  return (
    <div className="relative">
      {/* Button to scroll the ribbon left */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
        {/* Left arrow icon */}
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Ribbon container for category buttons */}
      <div
        ref={ribbonRef}
        className="flex overflow-x-auto space-x-2 scrollbar-hide"
        style={{ scrollLeft: scrollAmount }}
      >
        {/* Conditional rendering based on the status of the food data fetch */}
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error fetching data</p>}
        {status === "succeeded" &&
          filteredCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="px-4 py-2 bg-purple text-white rounded"
            >
              {category}
            </button>
          ))}
      </div>

      {/* Button to scroll the ribbon right */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
        {/* Right arrow icon */}
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// Specifies the type of the onCategorySelect prop for validation
FoodRibbon.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

// Exports the component for use in other parts of the application
export default FoodRibbon;