import { useState } from "react";
import FoodRibbon from "../components/FoodRibbon";
import FoodMenu from "../components/FoodMenu";

const ShowFoodMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("Selected Category in ShowFoodMenu:", selectedCategory); // Log selected category

  return (
    <div>
      <FoodRibbon onCategorySelect={setSelectedCategory} />
      {selectedCategory && <FoodMenu selectedCategory={selectedCategory} />}
    </div>
  );
};

export default ShowFoodMenu;