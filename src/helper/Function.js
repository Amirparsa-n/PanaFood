export const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
} 

export const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);

    if (index === -1) {
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}

export const checkIsClick = (stateLike, id) => {
    const result = stateLike.selectedFavoriteFood.find(item => item.id === id);

    return result
}