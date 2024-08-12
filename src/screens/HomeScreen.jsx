import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodData } from "../slices/foodDataApiSlice";
import { useNavigate } from "react-router";
import HomeHero from "../components/HomeScreen/HomeHero";
import FoodRibbon from "../components/FoodRibbon";
import HomeSpecialties from "../components/HomeScreen/HomeSpecialties";
import HomeCategories from "../components/HomeScreen/HomeCategories";
import HomeLocation from "../components/HomeScreen/HomeLocation";
import HomeBottom from "../components/HomeScreen/HomeBottom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/foods/${category}`);
    setSelectedCategory(selectedCategory);
  };

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-white via-lightOrange to-orange via-lightOrange to-white">
      <div className="px-[100px] py-[10px]">
        <HomeHero />
        <FoodRibbon onCategorySelect={handleCategorySelect} />
        <HomeSpecialties />
        <HomeCategories />
        <HomeLocation />
        <HomeBottom />
      </div>
    </div>
  );
};

export default HomeScreen;