import SHOP_DATA from "../../shop-data";
import { IShopState } from 'interfaces/store.interface'

const INITIAL_STATE: IShopState = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action: any): IShopState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;