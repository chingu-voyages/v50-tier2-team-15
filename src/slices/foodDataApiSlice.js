import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodMenuFetch from "../utils/foodMenuFetch";

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
    searchTerm: "",
    filteredFoods: [],
  },
    reducers: {
    selectFood(state, action) {
      state.selectedFood = action.payload;
    },
    filterFoods(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredFoods = Object.values(state.data)
        .flat()
        .filter((food) => food.name && food.name.toLowerCase().includes(searchTerm));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoodData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.filteredFoods = Object.values(action.payload).flat();
      })
      .addCase(fetchFoodData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectFood, filterFoods} = foodDataSlice.actions;

export default foodDataSlice.reducer;