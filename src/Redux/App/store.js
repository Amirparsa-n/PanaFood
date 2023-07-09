import { configureStore } from "@reduxjs/toolkit";

// reducer
import cartReducer from "../Features/cartSlice";
import favoriteFoodReducer from '../Features/favoriteFoodSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favoriteFood: favoriteFoodReducer,
    }
})

export default store;