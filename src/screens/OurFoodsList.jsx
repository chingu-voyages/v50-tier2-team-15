// This is an unordered list of the Our Foods category.
// It's a list of every single food available in JSON file.
// This screen would be used for filtering/searching stuff.
// From there, we should be able to get components, and move them to other screens.

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";
import Searchbar from "../components/Dashboard/Searchbar";
import Results from "../components/Dashboard/Results";
import FilterButtons from "../components/Dashboard/FilterButtons";

const OurFoodsList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);
  const filteredFoods = useSelector((state) => state.foodData.filteredFoods);

  return (
    <div>
      <h1>Our Foods List</h1>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterButtons />
      <Results filteredFoods={filteredFoods} status={status} error={error} />
    </div>
  );
};

export default OurFoodsList;