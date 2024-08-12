import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setTips } from "../slices/tipsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTips = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToOrderScreen = () => {
    toast.success("Tip added! Proceeding to checkout.");
    setTimeout(() => {
      navigate("/checkout");
    }, 1500); // Delay navigation to allow the toast message to display
  };

  const getTips = (tip) => {
    dispatch(setTips(tip));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <ToastContainer />
      <p className="text-center font-extrabold text-2xl text-gray-800 mb-6">
        Show us your support by adding Tips
      </p>
      <div className="flex space-x-4 justify-evenly mb-6">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => getTips(0)}
        >
          No Tip
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => getTips(18)}
        >
          18%
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => getTips(25)}
        >
          25%
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => getTips(35)}
        >
          35%
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => getTips(50)}
        >
          50%
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
          onClick={goToOrderScreen}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AddTips;