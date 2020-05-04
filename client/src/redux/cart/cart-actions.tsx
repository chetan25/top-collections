export const TOGGLE_CART_ICON = 'TOGGLE_CART_ICON';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_OUT_CART = 'CLEAR_OUT_CART';

export const setCartIconToggle = () => {
    return {
        type: TOGGLE_CART_ICON,
    }
};

export const addCartItem = (item: any) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};

export const removeCartItem = (item: any) => {
    return {
        type: CLEAR_ITEM,
        payload: item
    }
};

export const removeItem = (item: any) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
};

export const clearOutCart = () => ({
    type: CLEAR_OUT_CART
});