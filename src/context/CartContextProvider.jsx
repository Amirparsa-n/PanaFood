import React, {createContext} from 'react';
import { useReducer, useEffect } from 'react';

const savedCartItems = localStorage.getItem('cartItems');

let initialValue;

if (savedCartItems) {
    initialValue = JSON.parse(savedCartItems)
} else {
    initialValue = {
        selectedItems: [],
        itemsCounter: 0, 
        total: 0,
        checkout: false,
    }
}

const cartReducer = (state , action) => {

    
    const sumItems = (items) => {
        let itemsCounter = items.reduce((number, food) => number + food.quantity, 0);
        let total = items.reduce((number, food) => number + food.quantity * food.price.formatted, 0).toFixed(2);
        
        return {itemsCounter, total};
    }
    
    
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
            ...sumItems(state.selectedItems),
            checkout: false,
        }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.data.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }


        case "INCREASE":
            const increase = state.selectedItems.map(item => {
                if (item.id === action.data.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                return item;
            })
            return {
                ...state,
                selectedItems: increase,
                ...sumItems(increase)
            }

        case "DECREASE":
            const decrease = state.selectedItems.map(item => {
                if (item.id === action.data.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                }
                return item;
            })
            return {
                ...state,
                selectedItems: decrease,
                ...sumItems(decrease)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0, 
                total: 0,
                checkout: true,
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0, 
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

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state));
    }, [state])



    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;