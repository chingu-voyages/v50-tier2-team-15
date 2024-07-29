import { configureStore } from "@reduxjs/toolkit";

import foodDataReducer from "../slices/foodDataApiSlice";
import authSliceReducer from "../slices/authSlice";
import cartSliceReducer from "../slices/cartSlice";


const store = configureStore({
  reducer: {
    foodData: foodDataReducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
  },
});

export default store;