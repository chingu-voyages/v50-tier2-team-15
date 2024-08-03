import FoodMenu from "../components/FoodMenu";
import FoodCardModal from "../components/FoodCardModal";
import useToggle from "../utils/useToggle";


const ShowFoodMenu = () => {
  const { on, toggler } = useToggle();

  return (
    <div>
      <FoodMenu toggle={toggler} />
      {on && <FoodCardModal toggler={toggler} />}
    </div>
  );
};

export default ShowFoodMenu;