// // Dump components in here.
// // We need a cart. We need the FoodRibbon. We need the FoodMenu.
// // Should the ShowFoodMenu.jsx in the screens folder just be a component?????

// import { useDispatch } from "react-redux";
// import { increaseCurrency } from "../../slices/cartSlice";


// const AddTokens = () => {
//   const dispatch = useDispatch();

//   const handleAddCurrency = (amount) => {
//     dispatch(increaseCurrency(amount));
//   };
//   return (
//     <div className="flex flex-wrap justify-center align-middle gap-3">
//       <button className="" onClick={() => handleAddCurrency(50)}>+ 50</button>
//       <button onClick={() => handleAddCurrency(100)}>+ 100</button>
//       <button onClick={() => handleAddCurrency(150)}>+ 150</button>
//     </div>
//   );
// };

// export default AddTokens;

import { useDispatch } from "react-redux";
import { increaseTokens } from "../../slices/authSlice";

const AddTokens = () => {
  const dispatch = useDispatch();

  const handleAddTokens = (amount) => {
    dispatch(increaseTokens(amount));
  };

  return (
    <div className="flex flex-wrap justify-center align-middle gap-3">
      <button onClick={() => handleAddTokens(50)}>+ 50</button>
      <button onClick={() => handleAddTokens(100)}>+ 100</button>
      <button onClick={() => handleAddTokens(150)}>+ 150</button>
    </div>
  );
};

export default AddTokens;
