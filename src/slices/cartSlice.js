import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

//Initial state of the cart. If there is a cart (with items) in local storage, use that. If not, use an empty array.
const initialState = localStorage.getItem("cart")
  ? {...JSON.parse(localStorage.getItem("cart")), currency: 1000}
  : { cartItems: [], shippingAddress: {}, currency: 1000 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentItem) => currentItem._id === item._id
      );

      //Check if item is already in cart
      //If it is, replace it with the new item
      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        //If it isn't, add it to the cart
        state.cartItems = [...state.cartItems, item];
      }

      //Update the cart in local storage with that updateCart named export function in the /utils/cartUtils.js file.
      return updateCart(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      //Update the cart in local storage with that updateCart named export function in the /utils/cartUtils.js file.
      return updateCart(state);
    },

    saveShippingAddress: (state, action) => {
      //We update the shipping address in the state with the address that is passed in the action payload data.
      state.shippingAddress = action.payload;

      //Update the cart in local storage with the shipping address using that updateCart export function in the /utils/cartUtils.js file.
      return updateCart(state);
    },
    clearCartItems: (state) => {
      //Clear the cart items in the state by setting the cartItems array to an empty array.
      //Then we return the state of the empty cart with the updateCart export function in the /utils/cartUtils.js file.
      state.cartItems = [];
      return updateCart(state);
    },
    resetCart: () => {const resetState = { cartItems: [], shippingAddress: {}, currency: 1000 };
    localStorage.setItem("cart", JSON.stringify(resetState));
    return resetState;
  },
    decreaseCurrency: (state, action) => {
      state.currency -= action.payload; 
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseCurrency: (state, action) => {
      state.currency += action.payload; 
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  clearCartItems,
  resetCart,
  decreaseCurrency,
  increaseCurrency,
} = cartSlice.actions;

export default cartSlice.reducer;
