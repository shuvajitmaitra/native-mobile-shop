import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobileData: [],
  quantity: 0
};
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.mobile.find((item) => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.order++; 
      } else {
        state.mobileData.push({ ...action.payload, order: 1 });
      }
    },
    removeToCart: (state, action) => {
      return state.mobileData.filter((item) => item.id !== action.payload);
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.find((item) => item.id == action.payload.id);
      if(itemInCart.quantity){
        itemInCart.quantity--
      }
      else(
        console.warn("Limit reached")
      )
    },
  },
});

export const { addToCart, removeToCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
