import { createSelector } from 'reselect';
import  { IStore, ICartState } from 'interfaces/store.interface';

const selectorCart = (state: IStore) => state.cart;

export const selectCartItems = createSelector(
    [selectorCart],
    (cart: ICartState) => cart.cartItems
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems: any) => cartItems.reduce((acc: any, val: any) => acc +(val.quantity * val.price), 0)
);

export const selectCartQuantity = createSelector(
    [selectCartItems],
    (cartItems: any) => cartItems.reduce((acc: any, val: any) => acc + val.quantity, 0)
);

export const cartToggleSelector = createSelector(
    (state: IStore) => state.cart,
    (cart: ICartState) => cart.hidden
);
