import React, {createContext} from 'react';
import { useReducer } from 'react';

const initialValue = {
    selectedItems: [],
    itemCounter: 0, 
    total: 0,
    checkout: false,
}


const cartReducer = (state , action) => {

    const sumItems = (items) => {
        const itemsCounter = items.reduce((number, food) => number + food.quantity, 0);
        const total = items.reduce((number, food) => number + food.quantity * food.price.formatted, 0);

        return {itemsCounter, total};
    }

    console.log(state);

    switch (action.type) {

        case "ADD-ITEM":
        if (!state.selectedItems.find(item => item.id === action.data.id)) {
            state.selectedItems.push({
                ...action.data,
                quantity: 1,
            })
        }
        return {
            ...state,
            selectedItems:[...state.selectedItems],
            ...sumItems(state.selectedItems)
        }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.data.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(state.selectedItems)
            }


        case "INCREASE":
            const increase = state.selectedItems.map(item => {
                if (item.id === action.data.id) {
                    return {
                        ...item,
                        quantity: item.quantity++,
                    }
                }
                return item;
            })
            return {
                ...state,
                selectedItems: increase,
                ...sumItems(state.selectedItems)
            }

        case "DECREASE":
            const decrease = state.selectedItems.map(item => {
                if (item.id === action.data.id) {
                    return {
                        ...item,
                        quantity: item.quantity--,
                    }
                }
                return item;
            })
            return {
                ...state,
                selectedItems: decrease,
                ...sumItems(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemCounter: 0, 
                total: 0,
                checkout: true,
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemCounter: 0, 
                total: 0,
                checkout: false,
            }
    

    
        default:
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state , dispatch] = useReducer(cartReducer , initialValue)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;