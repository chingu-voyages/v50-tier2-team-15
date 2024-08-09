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
    <div>
        <p className="m-4 text-center font-extrabold text-xl">Show us your support by adding Tips</p>
        <div className="flex space-x-4 justify-center">
        <button onClick={()=> getTips(0)}>No Tip</button>   
        <button onClick={()=> getTips(18)}>18%</button>
        <button onClick={()=> getTips(25)}>25%</button>
        <button onClick={()=> getTips(35)}>35%</button>
        <button onClick={()=> getTips(50)}>50%</button>
        </div>
        
        <button className="m-5" onClick={goToOrderScreen}>Next</button>
    </div>
 )
}
export default AddTips
