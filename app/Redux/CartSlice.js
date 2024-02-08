import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Data";
const initialState = {
  mobilesData: [],
  data: Data,
};
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.mobilesData.find(
        (item) => item.id == action.payload.id
      );
      const quantityCount = state.data.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.order++;
        quantityCount.quantity--;
      } else {
        quantityCount.quantity--;
        state.mobilesData.push({ ...action.payload, order: 1 });
      }
    },
    removeToCart: (state, action) => {
      state.mobilesData = state.mobilesData.filter(
        (item) => item.id !== action.payload.index
      );

      const findItem = state.data.find((d) => d.id == action.payload.index);
      const increaseQuantity = findItem.quantity + action.payload.order;

      findItem.quantity = increaseQuantity;
    },
  },
});

export const { addToCart, removeToCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
