import { useDispatch } from "react-redux";
import { sortByPriceHighToLow, sortByPriceLowToHigh, sortByRatingHighToLow, sortByRatingLowToHigh, sortAlphabetically } from "../../slices/foodDataApiSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleSortByPriceHighToLow = () => {
    dispatch(sortByPriceHighToLow());
  };

  const handleSortByPriceLowToHigh = () => {
    dispatch(sortByPriceLowToHigh());
  };

  const handleSortByRatingHighToLow = () => {
    dispatch(sortByRatingHighToLow());
  };

  const handleSortByRatingLowToHigh = () => {
    dispatch(sortByRatingLowToHigh());
  };

   const handleSortAlphabetically = () => {
    dispatch(sortAlphabetically());
  };

  return (
    <div>
      <button onClick={handleSortByPriceHighToLow}>Sort by Price: High to Low</button>
      <button onClick={handleSortByPriceLowToHigh}>Sort by Price: Low to High</button>
      <button onClick={handleSortByRatingHighToLow}>Sort by Rating: High to Low</button>
      <button onClick={handleSortByRatingLowToHigh}>Sort by Rating: Low to High</button>
      <button onClick={handleSortAlphabetically}>A-Z</button>
    </div>
  );
};

export default FilterButtons;