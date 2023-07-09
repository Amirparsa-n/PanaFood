import { createSlice } from "@reduxjs/toolkit";

const savedCartItems = localStorage.getItem('cartItems');

let initialState;

if (savedCartItems) {
    initialState = JSON.parse(savedCartItems)
} else {
    initialState = {
        selectedItems: [],
        itemCounter: 0, 
        total: 0,
        checkout: false,
    }
}

const sumItems = (items) => {
    let itemCounter = items.reduce((number, food) => number + food.quantity, 0);
    let total = items.reduce((number, food) => number + food.quantity * food.price.formatted, 0).toFixed(2);
    
    return {itemCounter, total};
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addItem: (state, action) => {
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                })

                const { itemCounter, total } = sumItems(state.selectedItems);
                state.itemCounter = itemCounter;
                state.total = total;
            }
            state.checkout = false;
        },

        removeItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            const { itemCounter, total } = sumItems(newSelectedItems);
            state.selectedItems = newSelectedItems;
            state.itemCounter = itemCounter;
            state.total = total;
        },

        increase: (state, action) => {
            const indexI = state.selectedItems.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1
                  };
                }
                return item;
              });
              
              return {
                ...state, 
                selectedItems: indexI,
                ...sumItems(indexI)
              };
        },

        decrease : (state, action) => {
            const indexD = state.selectedItems.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    ...item,
                    quantity: item.quantity - 1
                  };
                }
                return item;
              });
              
              return {
                ...state,
                selectedItems: indexD,
                ...sumItems(indexD)
              };
        },

        checkout: (state, action) => {
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            }
        },

        clear: (state, action) => {
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            }
        }

    }
})

export default cartSlice.reducer;
export const {addItem, removeItem, increase, decrease, checkout, clear} = cartSlice.actions;