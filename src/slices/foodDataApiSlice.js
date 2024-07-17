import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodMenuFetch from "../../utils/foodMenuFetch";

export const fetchFoodData = createAsyncThunk(
  "foodData/fetchFoodData",
  async () => {
    const response = await foodMenuFetch();
    return response;
  }
);

const foodDataSlice = createSlice({
  name: "foodData",
  initialState: {
    data: {},
    status: "ready",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoodData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchFoodData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default foodDataSlice.reducer;