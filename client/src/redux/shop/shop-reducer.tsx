import { IShopState } from 'interfaces/store.interface'
import {
    FETCH_SHOP_DATA_START,
    FETCH_SHOP_DATA_SUCCESS,
    FETCH_SHOP_DATA_FAILURE
} from './shop-action';

const INITIAL_STATE: IShopState = {
    collections: [],
    isFetching: false
};

const shopReducer = (state = INITIAL_STATE, action: any): IShopState => {
    switch (action.type) {
        case FETCH_SHOP_DATA_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SHOP_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case FETCH_SHOP_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                collections: []
            };
        default:
            return state;
    }
};

export default shopReducer;