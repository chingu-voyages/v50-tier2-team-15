import { configureStore } from "@reduxjs/toolkit";
import foodDataReducer from "../slices/foodDataApiSlice";
import authSliceReducer from "../slices/authSlice";


const store = configureStore({
  reducer: {
    foodData: foodDataReducer,
    auth: authSliceReducer,
  },
});

export default store;