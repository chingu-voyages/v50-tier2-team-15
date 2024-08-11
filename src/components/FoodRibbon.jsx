import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";

const FoodRibbon = ({ onCategorySelect }) => {
  const dispatch = useDispatch();
  const ribbonRef = useRef(null); // Reference for the ribbon container

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);

  const desiredCategories = [
    "bbqs", "best-foods", "breads", "burgers",
    "chocolates", "desserts", "drinks", "fried-chicken",
    "ice-cream", "pizzas", "porks", "sandwiches",
    "sausages", "steaks"
  ];

  const filteredCategories = Object.keys(foodData).filter(category =>
    desiredCategories.includes(category)
  );

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const scrollLeft = () => {
    if (ribbonRef.current) {
      console.log("Scrolling left");
      ribbonRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (ribbonRef.current) {
      console.log("Scrolling right");
      ribbonRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="md:flex items-center justify-center relative hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
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

      <div
        ref={ribbonRef}
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide mx-8"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap", width: "1330px" }}
      >
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error fetching data</p>}
        {status === "succeeded" &&
          filteredCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="mx-auto flex flex-grow px-6 py-3 bg-purple text-white rounded-full text-lg whitespace-nowrap"
            >
              {category}
            </button>
          ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
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

FoodRibbon.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default FoodRibbon;