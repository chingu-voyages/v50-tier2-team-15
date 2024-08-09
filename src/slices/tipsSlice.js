import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tips: 0,
};
const tipsSlice = createSlice({
    name : "tips",
    initialState,
    reducers:{
        setTips: (state, action) => {
            state.tips = action.payload;
        },
        resetTips: state => {
            state.tips = 0;
        },
    },
});
export const { setTips, resetTips } = tipsSlice.actions;
export default tipsSlice.reducer;

