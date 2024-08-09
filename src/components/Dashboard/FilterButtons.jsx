
import { useDispatch } from "react-redux";
import { sortByPriceHighToLow, sortByPriceLowToHigh, sortByRatingHighToLow, sortByRatingLowToHigh } from "../../slices/foodDataApiSlice";

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


  return (
    <div className="mx-auto flex flex-grow">
      <div>
        <h3 >Filter by:</h3>
      </div>
      <div className="m-6">
        <button onClick={handleSortByPriceHighToLow}>Price: High to Low</button>
      </div>
      <div className="m-6">
        <button onClick={handleSortByPriceLowToHigh}>Price: Low to High</button>
      </div>
      <div className="m-6">
        <button onClick={handleSortByRatingHighToLow}>Rating: High to Low</button>
      </div>
      <div className="m-6">
        <button onClick={handleSortByRatingLowToHigh}>Rating: Low to High</button>
      </div>
    </div>
  );
};

export default FilterButtons;