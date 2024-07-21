// This is an unordered list of the Our Foods category.
// It's a list of every single food available in JSON file.
// This screen would be used for filtering/searching stuff.
// From there, we should be able to get components, and move them to other screens.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";

const OurFoodsList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const foodData = useSelector((state) => state.foodData.data);
  const status = useSelector((state) => state.foodData.status);
  const error = useSelector((state) => state.foodData.error);

  const allFoods = Object.values(foodData).flat();

  return (
    <div>
      <h1>Our Foods List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching data: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {allFoods.map((food) => (
            <li key={food.id}>{food.name}</li>
          ))}
        </ul>
      )}
    </div>
  );

};

export default OurFoodsList;