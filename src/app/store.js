import { configureStore } from "@reduxjs/toolkit";

import foodDataReducer from "../slices/foodDataApiSlice";
import authSliceReducer from "../slices/authSlice";
import cartSliceReducer from "../slices/cartSlice";
import tipsSliceReducer from "../slices/tipsSlice";
import orderSliceReducer from "../slices/orderSlice";


const store = configureStore({
  reducer: {
    foodData: foodDataReducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
    tips: tipsSliceReducer,
    orders: orderSliceReducer,
  },
});

export default store;