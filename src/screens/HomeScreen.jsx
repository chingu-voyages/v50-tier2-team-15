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
import { FaRegArrowAltCircleUp } from "react-icons/fa";



const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/foods/${category}`);
    setSelectedCategory(selectedCategory);
  };

  useEffect(() => {
    dispatch(fetchFoodData());

    const handleScroll = () => {
      const ribbon = document.querySelector("#foodRibbon"); // Add an id to FoodRibbon's wrapper div
      const ribbonTop = ribbon?.offsetTop || 0;

      if (window.scrollY > ribbonTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-white via-lightOrange to-orange via-lightOrange to-white">
      <div className="px-[100px] py-[10px]">
        <HomeHero />
        <FoodRibbon onCategorySelect={handleCategorySelect} />
        <HomeSpecialties />
        <HomeCategories />
        <HomeLocation />
        <HomeBottom />
        {showBackToTop && (
          <button
            className="fixed bottom-3 -right-3 text-lightOrange bg-transparent rounded-full hidden md:block text-5xl drop-shadow-none hover:drop-shadow-none focus:bg-transparent"
            onClick={scrollToTop}
          >
            <FaRegArrowAltCircleUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
