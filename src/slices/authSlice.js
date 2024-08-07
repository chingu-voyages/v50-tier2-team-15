import { createSlice } from "@reduxjs/toolkit";

// Initial state of the auth slice.
const initialState = {
  userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

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
    logout: (state) => {
      // Set the userInfo part of the state to null, and remove it from localStorage.
      state.userInfo = null;
      localStorage.clear();
    }
  }
})

// Export the setCredentials and increaseTokens reducer functions from the auth slice as actions.
export const { setCredentials, increaseTokens, logout } = authSlice.actions;

// Export the auth slice as the default reducer function.
export default authSlice.reducer;
