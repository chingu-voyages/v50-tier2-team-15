import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  saveOrderToLocalStorage,
  getOrderFromLocalStorage,
  getAllOrdersFromLocalStorage,
  updateOrderInLocalStorage,
  deleteOrderFromLocalStorage,
} from "../utils/orderHelper";

export const createOrder = createAsyncThunk("orders/createOrder", async (order) => {
  saveOrderToLocalStorage(order);
  return order;
});

export const fetchOrder = createAsyncThunk("orders/fetchOrder", async (orderId) => {
  const order = getOrderFromLocalStorage(orderId);
  return order;
});

export const fetchAllOrders = createAsyncThunk("orders/fetchAllOrders", async () => {
  const orders = getAllOrdersFromLocalStorage();
  return orders;
});

export const updateOrder = createAsyncThunk("orders/updateOrder", async (order) => {
  updateOrderInLocalStorage(order);
  return order;
});

export const deleteOrder = createAsyncThunk("orders/deleteOrder", async (orderId) => {
  deleteOrderFromLocalStorage(orderId);
  return orderId;
});

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    order: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(order => order.id !== action.payload);
      });
  },
});

export default orderSlice.reducer;