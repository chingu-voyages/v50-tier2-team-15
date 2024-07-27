import PropTypes from 'prop-types';

const Results = ({ filteredFoods, status, error }) => {
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error fetching data: {error}</p>;

  return (
    <ul>
      {filteredFoods.map((food, index) => (
        <li key={`${food.id}-${index}`}>{food.name}</li>
      ))}
    </ul>
  );
};

Results.propTypes = {
  filteredFoods: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Results;