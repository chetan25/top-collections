import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    FETCH_SHOP_DATA_START,
    fetchShopDataSuccess,
    fetchShopDataFailure
} from './shop-action';
import {convertCollectionSnapShotToMap, firestore} from "firebase/firebase.settings";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapShotToMap, snapshot);
        yield put(fetchShopDataSuccess(collectionMap));
    } catch(err) {
        yield put(fetchShopDataFailure());
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        FETCH_SHOP_DATA_START,
        fetchCollectionAsync
    );
}

export function* shopSaga() {
    yield all([
        call(fetchCollectionStart)
    ])
}