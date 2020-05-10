import {
    TOGGLE_CART_ICON, ADD_ITEM,
    REMOVE_ITEM, CLEAR_ITEM,
    CLEAR_OUT_CART,
    PERSIST_USER_CART,
    UPDATE_USER_CART
} from './cart-actions';
import { addItemToCart, removeItemFromCart, removeItem, persistUserCart } from './cart-util';
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
                cartItems: addItemToCart(state.cartItems, action.payload.item)
            };
        case CLEAR_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,  action.payload.item)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,  action.payload.item)
            };
        case CLEAR_OUT_CART:
            return {
                ...state,
                cartItems: []
            };
        case PERSIST_USER_CART:
            persistUserCart(state.cartItems, action.payload)
            return {
                ...state
            }
        case UPDATE_USER_CART:
            return {
                ...state,
                cartItems: action.payload.items
            }
        default:
            return state;
    }
};

export default cartReducer;