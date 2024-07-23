// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchFoodData } from "../slices/foodDataApiSlice";
// // import FoodRibbon from "../components/FoodRibbon";
import HomeHero from "../components/HomeScreen/HomeHero";
import FoodRibbon from "../components/FoodRibbon";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSpecialties from "../components/HomeScreen/HomeSpecialties";
import HomeCategories from "../components/HomeScreen/HomeCategories";
import HomeLocation from "../components/HomeScreen/HomeLocation";
import HomeBottom from "../components/HomeScreen/HomeBottom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const handleCategorySelect = (category) => {
    // Console log the selected category.
    console.log("Selected category:", category);
    // Navigate to the selected category's page.
    navigate(`/foods/${category}`);
  };

  // const dispatch = useDispatch();

  // // const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect(() => {
  //   dispatch(fetchFoodData());
  // }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-white to-lightOrange">
      <div className="px-[150px] py-[10px]">
        <Navbar />
        <HomeHero />
        <FoodRibbon onCategorySelect={handleCategorySelect} />
        <HomeSpecialties />
        <HomeCategories />
        <HomeLocation />
        <HomeBottom />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
