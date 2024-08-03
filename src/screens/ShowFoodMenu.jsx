import FoodMenu from "../components/FoodMenu";
import FoodCardModal from "../components/FoodCardModal";
import useToggle from "../utils/useToggle";

const ShowFoodMenu = () => {
  const { on, toggler, selectedFood } = useToggle();

  return (
    <div>
      <FoodMenu toggle={toggler} />
      {on && <FoodCardModal toggler={toggler} food={selectedFood} />}
    </div>
  );
};

export default ShowFoodMenu;