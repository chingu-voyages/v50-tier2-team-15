import FoodMenu from "../components/FoodMenu";
import PropTypes from "prop-types";

const ShowFoodMenu = ({ toggler }) => {
  return (
    <div>
      <FoodMenu toggle={toggler} />
    </div>
  );
};

ShowFoodMenu.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default ShowFoodMenu;