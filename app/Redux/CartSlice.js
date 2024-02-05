import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("state", state);
      console.log("action: ", action);
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
