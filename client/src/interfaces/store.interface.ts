import {IUser} from './user.interface';
import {ICartItems, IDirectoryItem, IShop} from "./cart.interface";

export interface IUserState {
    currentUser: IUser|null;
    error: any|null;
}

export interface ICartState {
    cartItems: ICartItems[];
    hidden: boolean;
}

export interface IDirectoryState {
    sections: IDirectoryItem[]
}

export interface IShopState {
    collections: IShop|[];
    isFetching: boolean;
}
export interface IStore {
    user: IUserState;
    cart: ICartState;
    directory: IDirectoryState;
    shop: IShopState;
}
