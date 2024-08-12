

import { useDispatch } from "react-redux";
import { increaseTokens } from "../../slices/authSlice";

const AddTokens = () => {
  const dispatch = useDispatch();

  const handleAddTokens = (amount) => {
    dispatch(increaseTokens(amount));
  };

  return (
    <div className="flex flex-wrap justify-center align-middle gap-3">
      <button className="hover:bg-gray-200 transition duration-200 ease-in-out" onClick={() => handleAddTokens(50)}>+ 50</button>
      <button className="hover:bg-gray-200 transition duration-200 ease-in-out" onClick={() => handleAddTokens(100)}>+ 100</button>
      <button className="hover:bg-gray-200 transition duration-200 ease-in-out" onClick={() => handleAddTokens(150)}>+ 150</button>
    </div>
  );
};

export default AddTokens;
