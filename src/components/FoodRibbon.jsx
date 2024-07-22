import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";

const FoodRibbon = ({ onCategorySelect }) => {
  const dispatch = useDispatch();
  const ribbonRef = useRef(null); // Reference for the ribbon container
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);

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
    setScrollAmount((prev) => Math.max(prev - 200, 0));
  };

  const scrollRight = () => {
    const container = ribbonRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollAmount((prev) => Math.min(prev + 200, maxScroll));
  };

  return (
    <div className="relative">
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
        className="flex overflow-x-auto space-x-2 scrollbar-hide"
        style={{ scrollLeft: scrollAmount }}
      >
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error fetching data</p>}
        {status === "succeeded" &&
          filteredCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
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




// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFoodData } from "../slices/foodDataApiSlice";

// const FoodRibbon = ({ onCategorySelect }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchFoodData());
//   }, [dispatch]);

//   const foodData = useSelector((state) => state.foodData.data);
//   const status = useSelector((state) => state.foodData.status);
//   const error = useSelector((state) => state.foodData.error);

//   const desiredCategories = [
//     "bbqs", "best-foods", "breads", "burgers",
//     "chocolates", "desserts", "drinks", "fried-chicken",
//     "ice-cream", "pizzas", "porks", "sandwiches",
//     "sausages", "steaks"
//   ];

//   const filteredCategories = Object.keys(foodData).filter(category =>
//     desiredCategories.includes(category)
//   );

//   const handleCategoryClick = (category) => {
//     onCategorySelect(category);
//   };

//   return (
//     <div>
//       <h1>Food Ribbon</h1>
//       {status === "loading" && <p>Loading...</p>}
//       {status === "failed" && <p>Error fetching data</p>}
//       {status === "succeeded" && filteredCategories.map((category) => (
//         <button key={category} onClick={() => handleCategoryClick(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// FoodRibbon.propTypes = {
//   onCategorySelect: PropTypes.func.isRequired,
// };

// export default FoodRibbon;




// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFoodData } from "../slices/foodDataApiSlice";

// const FoodRibbon = ({ onCategorySelect }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchFoodData());
//   }, [dispatch]);

//   const foodData = useSelector((state) => state.foodData.data);
//   const status = useSelector((state) => state.foodData.status);
//   const error = useSelector((state) => state.foodData.error);

//     const desiredCategories = [
//     "bbqs",
//     "best-foods",
//     "breads",
//     "burgers",
//     "chocolates",
//     "desserts",
//     "drinks",
//     "fried-chicken",
//     "ice-cream",
//     "pizzas",
//     "porks",
//     "sandwiches",
//     "sausages",
//     "steaks"
//   ];

//   const filteredCategories = Object.keys(foodData).filter(category =>
//     desiredCategories.includes(category)
//   );

//   console.log("Food Data:", foodData); // Log fetched data
//   console.log("Fetch Status:", status); // Log fetch status
//   if (error) console.log("Fetch Error:", error); // Log any fetch errors

//   const handleCategoryClick = (category) => {
//     onCategorySelect(category);
//   };

//   return (
//     <div>
//       <h1>Food Ribbon</h1>
//       {status === "loading" && <p>Loading...</p>}
//       {status === "failed" && <p>Error fetching data</p>}
//       {status === "succeeded" && filteredCategories.map((category) => (

//         <button key={category} onClick={() => handleCategoryClick(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// FoodRibbon.propTypes = {
//   onCategorySelect: PropTypes.func.isRequired,
// };

// export default FoodRibbon;