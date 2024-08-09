import PropTypes from 'prop-types';

const Results = ({ filteredFoods, status, error, onSelectFood }) => {
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error fetching data: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredFoods.map((food, index) => (
        <div
          key={`${food.id}-${index}`} // Ensures a unique key even if ids are duplicated
          className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer h-80 relative"
          onClick={() => onSelectFood(food)} // Handle click event
        >
          <img
            src={food.img}
            alt={food.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-lg font-semibold mb-2">{food.name}</h4>
              <p className="text-gray-600 mb-4">Price: ${food.price}</p>
              <p className="text-gray-600 mb-4">Rating: {food.rate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Results.propTypes = {
  filteredFoods: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onSelectFood: PropTypes.func.isRequired, // Ensure onSelectFood is passed
};

export default Results;

