import FoodMenu from "../components/FoodMenu";
import FoodCardModal from "../components/FoodCardModal";
import useToggle from "../utils/useToggle";
import PropTypes from "prop-types";

const ShowFoodMenu = () => {
  const { on, toggler } = useToggle();

  return (
    <div>
      <FoodMenu toggle={toggler} />
      {on && <FoodCardModal toggler={toggler} />}
    </div>
  );
};

ShowFoodMenu.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default ShowFoodMenu;