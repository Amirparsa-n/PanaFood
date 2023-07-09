import { configureStore } from "@reduxjs/toolkit";

// reducer
import cartReducer from "../Features/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,

    }
})

export default store;