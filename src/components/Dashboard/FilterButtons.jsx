
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
    <div className="mx-auto flex justify-center align-middle">
      <div className="m-6">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out" onClick={handleSortByPriceHighToLow}>Price: High to Low</button>
      </div>
      <div className="m-6">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out"  onClick={handleSortByPriceLowToHigh}>Price: Low to High</button>
      </div>
      <div className="m-6">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out"  onClick={handleSortByRatingHighToLow}>Rating: High to Low</button>
      </div>
      <div className="m-6">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out"  onClick={handleSortByRatingLowToHigh}>Rating: Low to High</button>
      </div>
    </div>
  );
};

export default FilterButtons;