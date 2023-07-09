import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedFavoriteFood: [],
    itemsCounter: 0, 
}

const favoriteFoodSlice = createSlice({
    name: 'favorite Food',
    initialState,

    reducers: {

        addLike: (state, action) => {
            if (!state.selectedFavoriteFood.find(item => item.id === action.payload.id) ) {
                state.selectedFavoriteFood.push({
                    ...action.payload,
                    isClick: true,
                })
                state.itemsCounter++;
            }
        },

        removeLike: (state, action) => {
            const newSelectedFavoriteFood = state.selectedFavoriteFood.filter(item => item.id !== action.payload.id);
            state.selectedFavoriteFood= newSelectedFavoriteFood;
            state.itemsCounter = state.itemsCounter--;
        },

        clearLike: () => {
            return {
                selectedFavoriteFood: [],
                itemsCounter: 0, 
            }
        }

    }
})

export default favoriteFoodSlice.reducer;
export const {addLike, removeLike, clearLike} = favoriteFoodSlice.actions;