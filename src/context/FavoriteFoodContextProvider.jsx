import React, {createContext} from 'react';
import { useReducer } from 'react';

let initialValue = {
    selectedFavoriteFood: [],
    itemsCounter: 0, 
}


const likeReducer = (state , action) => {

    console.log(state);

    switch (action.type) {
        case "ADD_LIKE":
            if (!state.selectedFavoriteFood.find(item => item.id === action.data.id) ) {
                state.selectedFavoriteFood.push({
                    ...action.data,
                    isClick: true,
                })
                state.itemsCounter++;
            }
            return {
                ...state,
                selectedFavoriteFood:[...state.selectedFavoriteFood],
            }
            
        case "REMOVED_LIKE":
            const newSelectedFavoriteFood = state.selectedFavoriteFood.filter(item => item.id !== action.data.id)
            return {
                ...state,
                selectedFavoriteFood: [...newSelectedFavoriteFood],
                itemsCounter: state.itemsCounter--,
            }            
            
            
        default:
            return state
    }
}
        
export const FavoriteFoodContext = createContext()

const FavoriteFoodContextProvider = ({children}) => {


    const [stateLike, dispatchLike] = useReducer(likeReducer, initialValue)

    return (
        <FavoriteFoodContext.Provider value={{stateLike, dispatchLike}}>
            {children}
        </FavoriteFoodContext.Provider>
    );
};

export default FavoriteFoodContextProvider;