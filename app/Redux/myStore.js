import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const myStore = configureStore({
    reducer: {
        mobilesData: CartSlice

    }
})

export default myStore;