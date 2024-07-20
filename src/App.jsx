import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "./slices/foodDataApiSlice";
import "./App.css";
import FoodCard from "./components/FoodCard";
import FoodRibbon from "./components/FoodRibbon";
import FoodMenu from "./components/FoodMenu";
import Navbar from "./components/Navbar";
import HomeScreen from './screens/HomeScreen';
function App() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");



  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <>
      
      <HomeScreen />
      <Navbar />
      <FoodRibbon onCategorySelect={setSelectedCategory} />
      {selectedCategory && <FoodMenu selectedCategory={selectedCategory} />}
      <FoodCard />
      
    </>
  );
}

export default App;