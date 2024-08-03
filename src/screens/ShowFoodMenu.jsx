import { useState } from "react";
import FoodMenu from "../components/FoodMenu";
import FoodCardModal from "../components/FoodCardModal";
import useToggle from "../utils/useToggle";

const ShowFoodMenu = () => {
  const { on, toggler } = useToggle();
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div>
      <FoodMenu toggle={toggler} onSelectFood={setSelectedFood} />
      {on && selectedFood && (
        <FoodCardModal food={selectedFood} toggler={toggler} />
      )}
    </div>
  );
};

export default ShowFoodMenu;