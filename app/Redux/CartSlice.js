import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        removeToCart(state, action) {
            return state.filter((item, index) => {
                index !== action.payload;
            })
        }
    }
})

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;