import {all, call, takeLatest, put } from 'redux-saga/effects';
import {
    clearOutCart,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ITEM,
    persistUserCart
} from './cart-actions';
import { SIGN_OUT_SUCCESS } from 'redux/user/user-actions';

export function* clearCart() {
   yield put(clearOutCart());
}

export function* onClearCart() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCart)
}

export function* updateUserCart(action) {
    yield put(persistUserCart(action.payload));
}

export function* onCartItemUpdate() {
  yield takeLatest([ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM], updateUserCart)
}

export function* cartSaga() {
    yield all([
        call(onClearCart),
        call(onCartItemUpdate)
    ]);
}