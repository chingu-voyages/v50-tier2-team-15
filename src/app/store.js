import { configureStore } from "@reduxjs/toolkit";
import foodDataReducer from "../slices/foodDataApiSlice";

const store = configureStore({
  reducer: {
    foodData: foodDataReducer,
  },
});

export default store;