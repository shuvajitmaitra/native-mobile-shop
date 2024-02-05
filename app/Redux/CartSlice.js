import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.find(item=> item.id == action.payload.id)
        if(itemInCart){
            itemInCart.order++
        }
        else{
            state.push({...action.payload, order:1});
        }
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
