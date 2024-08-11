import { useState } from 'react';
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import starFilled from "@iconify/icons-mdi/star"; // Import star icon
import LazyLoad from "react-lazyload";

const Results = ({ filteredFoods, status, error, onSelectFood }) => {
  const [imageError, setImageError] = useState({});
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error fetching data: {error}</p>;

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          icon={starFilled}
          className={i < rate ? "text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  const handleError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredFoods.map((food, index) => (
        <div
          key={`${food.id}-${index}`} // Ensures a unique key even if ids are duplicated
          className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer h-80 relative"
          onClick={() => onSelectFood(food)} // Handle click event
        >
          <LazyLoad height={200} offset={100}>
          {imageError[food.id] ? (
              <div className="image-placeholder">Image not available</div>
            ) : (
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-48 object-cover"
              onError={() => handleError(food.id)}
              loading="lazy"
            />
            )}
          </LazyLoad>
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-lg font-semibold mb-2">{food.name}</h4>
              <p className="text-gray-600 mb-4">Price: ${food.price}</p>
              <div className="flex mb-4 m-auto p-auto justify-center align-center">
                {renderStars(food.rate)}
              </div>
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
