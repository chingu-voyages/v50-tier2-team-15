import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "./slices/foodDataApiSlice";
import "./App.css";
import FoodCard from "./components/FoodCard";
import FoodRibbon from "./components/FoodRibbon";
import FoodMenu from "./components/FoodMenu";
import Navbar from "./components/Navbar";
import HomeScreen from './screens/HomeScreen';
import Footer from "./components/Footer";


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
      <Footer />
      
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* added extra padding in here to see what it looks like past 100vh. Delete once the homepage has more sections */}
      <div className="py-[100px]"></div>
      <Footer />
    </>
  );
}

export default App;