import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import PropTypes from "prop-types";

const FoodCardModal = ({ toggler, food }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const foodData = useSelector((state) => state.foodData.data);
  const food = Object.values(foodData)
    .flat()
    .find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!food) return <div className="text-center mt-4">Select a food item to see details</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...food, qty: quantity }));
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggler}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 relative">
          <button 
            onClick={toggler} 
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 border-2 border-gray-600 rounded-full px-3"
          >
            X
          </button>
          <div className="p-4 md:pt-8 flex flex-col max-w-6xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold mb-4">{food.dsc}</h1>
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <div className="flex-1">
                <img
                  src={food.img}
                  alt={food.dsc}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0 flex flex-col justify-center space-y-6">
                <h3 className="text-xl font-semibold">Price: {food.price}</h3>
                <h3 className="text-xl font-semibold">Rating: {food.rate}</h3>
                <h3 className="text-xl font-semibold">{food.name}</h3>
                <h3 className="text-xl font-semibold">Location: {food.country}</h3>
                {userInfo ? (
                  <>
                    <div className="flex items-center justify-center space-x-4 mt-4">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
                    >
                      Add to Cart
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FoodCardModal.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default FoodCardModal;