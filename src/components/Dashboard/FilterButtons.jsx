
import { useDispatch } from "react-redux";
import { sortByPriceHighToLow, sortByPriceLowToHigh, sortByRatingHighToLow, sortByRatingLowToHigh } from "../../slices/foodDataApiSlice";
import { LuArrowDownUp } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";



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
    <div className="mx-auto flex justify-center align-middle flex-wrap mb-8 mt-5">
      <div className="md:m-6 m-3 flex">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out flex gap-1 md:text-lg" onClick={handleSortByPriceHighToLow}>Price <LuArrowUpDown className="mt-1"  />
        </button>
      </div>
      <div className="md:m-6 m-3">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out flex gap-1 md:text-lg"  onClick={handleSortByPriceLowToHigh}>Price <LuArrowDownUp className="mt-1" />
        </button>
      </div>
      <div className="md:m-6 m-3">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out flex gap-1 md:text-lg"  onClick={handleSortByRatingHighToLow}>Rating <LuArrowUpDown className="mt-1"  />
        </button>
      </div>
      <div className="md:m-6 m-3">
        <button className="hover:bg-gray-200 transition duration-200 ease-in-out flex gap-1 md:text-lg"  onClick={handleSortByRatingLowToHigh}>Rating <LuArrowDownUp className="mt-1" /></button>
      </div>
    </div>
  );
};

export default FilterButtons;