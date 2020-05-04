import {all, call, takeLatest, put } from 'redux-saga/effects';
import { clearOutCart } from './cart-actions';
import { SIGN_OUT_SUCCESS } from 'redux/user/user-actions';

export function* clearCart() {
   yield put(clearOutCart());
}

export function* onClearCart() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCart)
}

export function* cartSaga() {
    yield all([
       call(onClearCart)
    ]);
}