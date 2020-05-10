import { IShop } from 'interfaces/cart.interface';
import {Dispatch} from "redux";
import {convertCollectionSnapShotToMap, firestore} from "firebase/firebase.settings";

export const FETCH_SHOP_DATA_START = 'FETCH_SHOP_DATA_START';
export const FETCH_SHOP_DATA_SUCCESS = 'FETCH_SHOP_DATA_SUCCESS';
export const FETCH_SHOP_DATA_FAILURE = 'FETCH_SHOP_DATA_FAILURE';

export const setShopData = (data: IShop) => {
    return {
        type: FETCH_SHOP_DATA_SUCCESS,
        payload: data
    }
};

export const fetchShopDataSuccess = (data: IShop) => {
    return {
        type: FETCH_SHOP_DATA_SUCCESS,
        payload: data
    }
};

export const fetchShopDataStart = () => {
    return {
        type: FETCH_SHOP_DATA_START
    }
};

export const fetchShopDataFailure = () => {
    return {
        type: FETCH_SHOP_DATA_FAILURE
    }
};

export const fetchShopDataAsync = () => {
    return  (dispatch: Dispatch) => {
        dispatch(fetchShopDataStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then((snapShot: any) => {
            const collectionData = convertCollectionSnapShotToMap(snapShot);
            dispatch(setShopData(collectionData));
        }).catch((err: any) => {
            dispatch(fetchShopDataFailure());
        });
    }
};