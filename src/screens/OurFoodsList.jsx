// This is an unordered list of the Our Foods category.
// It's a list of every single food available in JSON file.
// This screen would be used for filtering/searching stuff.
// From there, we should be able to get components, and move them to other screens.

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData, filterFoods } from "../slices/foodDataApiSlice";

const OurFoodsList = () => {

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);
  const filteredFoods = useSelector((state) => state.foodData.filteredFoods);
  
  const allFoods = Object.values(foodData).flat();
  const handleSearch = () => {
    dispatch(filterFoods(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <h1>Our Foods List</h1>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}  
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching data: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {/* {filteredFoods.map((food) => (
          // allFoods.map((food) => (
            <li key={`${food.id}-${index}`}>{food.name}</li>
          ))} */}
          {filteredFoods.map((food, index) => (
  <li key={`${food.id}-${index}`}>{food.name}</li>
))}
        </ul>
      )}
    </div>
  );

};

export default OurFoodsList;