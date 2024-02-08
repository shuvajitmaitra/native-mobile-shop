import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import Data from "../Data/Data";

const initialState = {
  mobilesData: [],
  data: Data
};
=======
const initialState = [];
>>>>>>> 1a1dbbd99f2d70742081f1283949d54c86af8812
const cartSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addToCart: (state, action) => {
<<<<<<< HEAD
      const itemInCart = state.mobilesData.find(
        (item) => item.id == action.payload.id
      );
=======
      const itemInCart = state.find((item) => item.id == action.payload.id);
>>>>>>> 1a1dbbd99f2d70742081f1283949d54c86af8812
      if (itemInCart) {
        itemInCart.order++;
      } else {
<<<<<<< HEAD
        state.mobilesData.push({ ...action.payload, order: 1 });
        console.log("MobilesData", state.mobilesData);
      }
    },
    removeToCart: (state, action) => {
      return state.mobilesData.filter((item) => item.id !== action.payload);
=======
        state.push({ ...action.payload, order: 1 });
      }
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
>>>>>>> 1a1dbbd99f2d70742081f1283949d54c86af8812
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
