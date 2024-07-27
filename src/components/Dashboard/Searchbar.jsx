import { useDispatch } from "react-redux";
import { filterFoods } from "../../slices/foodDataApiSlice";

import PropTypes from "prop-types";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
    const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterFoods(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
