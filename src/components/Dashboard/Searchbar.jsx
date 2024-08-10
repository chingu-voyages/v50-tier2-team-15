import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { filterFoods } from "../../slices/foodDataApiSlice";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterFoods(searchTerm)); // Dispatch the action with the current search term
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the local state with the new search term
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-purple mb-6">Find your favorite foods</h2>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleChange}
        style={{ 
          marginRight: '10px',
          outline: 'none', 
          border: '2px solid transparent',
          borderRadius: '25px',
          transition: 'border-color 0.3s ease',
          paddingLeft: '10px',
          height: "40px",
        }}
        onFocus={(e) => e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)'}
        onBlur={(e) => e.target.style.borderColor = 'transparent'}
      />
      <button className="hover:bg-gray-200 transition duration-200 ease-in-out"  onClick={handleSearch}>Search</button>
    </div>
  );
};

Searchbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Searchbar;
