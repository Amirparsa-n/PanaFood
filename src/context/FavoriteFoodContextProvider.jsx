import React, {createContext} from 'react';
import { useReducer, useEffect } from 'react';


const savedFavoriteFoodItems = localStorage.getItem('FavoriteFoodItem');

let initialValue;

if (savedFavoriteFoodItems) {
    initialValue = JSON.parse(savedFavoriteFoodItems)
} else {
    initialValue = {
        selectedFavoriteFood: [],
        itemsCounter: 0, 
    }
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
            
        case "CLEAR_LIKE":
            return {
                selectedFavoriteFood: [],
                itemsCounter: 0, 
            }
            
            
        default:
            return state
    }
}
        
export const FavoriteFoodContext = createContext()

const FavoriteFoodContextProvider = ({children}) => {


    const [stateLike, dispatchLike] = useReducer(likeReducer, initialValue)

    useEffect(() => {
        localStorage.setItem('FavoriteFoodItem', JSON.stringify(stateLike));
    }, [stateLike])

    return (
        <FavoriteFoodContext.Provider value={{stateLike, dispatchLike}}>
            {children}
        </FavoriteFoodContext.Provider>
    );
};

export default FavoriteFoodContextProvider;