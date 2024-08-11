import { createSlice } from "@reduxjs/toolkit";
import chickenAvatar from "../assets/chicken-avatar.svg";
import pigAvatar from "../assets/pig-avatar.svg";
import cowAvatar from "../assets/cow-avatar.svg";

const avatars = [chickenAvatar, pigAvatar, cowAvatar];

// Initial state of the auth slice.
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

// Create the auth slice with the setCredentials reducer function to set the user's credentials in the state.
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // Set the user's credentials in the state with the data from the payload and save it to local storage.
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    increaseTokens: (state, action) => {
      // Update the user's token amount in the state and save it to local storage.
      if (state.userInfo) {
        state.userInfo.tokens += action.payload;
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    decreaseTokens: (state, action) => {
      if (state.userInfo.tokens >= action.payload) {
        state.userInfo.tokens -= action.payload;
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    logout: (state) => {
      // Set the userInfo part of the state to null, and remove it from localStorage.
      state.userInfo = null;
      localStorage.clear();
    },
    loginAsGuest: (state) => {
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      state.userInfo = { username: "Guest", tokens: 100, avatar: randomAvatar };
    },
  },
});

// Export the setCredentials and increaseTokens reducer functions from the auth slice as actions.
export const { setCredentials, increaseTokens, decreaseTokens, logout, loginAsGuest } =
  authSlice.actions;

// Export the auth slice as the default reducer function.
export default authSlice.reducer;
