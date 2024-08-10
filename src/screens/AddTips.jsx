// import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { setTips } from "../slices/tipsSlice";
import { useDispatch, useSelector } from "react-redux";



const AddTips = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToOrderScreen = () => { 
    navigate("/checkout");
 };
 const getTips = (tip)=> {
    dispatch(setTips(tip))
 }

 return(
 
  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
  <p className="m-4 text-center font-extrabold text-2xl text-gray-800">
    Show us your support by adding Tips
  </p>
  <div className="flex space-x-4 justify-center mt-6">
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
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded mt-8 transition duration-300"
      onClick={goToOrderScreen}
    >
      Next
    </button>
  </div>
</div>
 )
}
export default AddTips
