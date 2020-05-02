import { TOGGLE_CART_ICON, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM } from './cart-actions';
import { addItemToCart, removeItemFromCart, removeItem } from './cart-util';
import { ICartState } from 'interfaces/store.interface';

const INITIAL_STATE: ICartState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: any) : ICartState=> {
    switch (action.type) {
        case TOGGLE_CART_ICON:
           return {
               ...state,
               hidden: !state.hidden
           };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CLEAR_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,  action.payload)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,  action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;