import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Data";

const initialState = {
  mobilesData: [],
  data: Data
};
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.mobilesData.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.order++;
      } else {
        state.mobilesData.push({ ...action.payload, order: 1 });
        console.log("MobilesData", state.mobilesData);
      }
    },
    removeToCart: (state, action) => {
      return state.mobilesData.filter((item) => item.id !== action.payload);
    },
    decrementQuantity: (state, action) => {
      if (action.payload > 0) {
        action.payload - 1;
      } else action.payload;
    },
  },
});

export const { addToCart, removeToCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
