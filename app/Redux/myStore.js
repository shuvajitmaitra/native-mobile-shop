import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const myStore = configureStore({
    mobilesData : CartSlice
})

export default myStore;