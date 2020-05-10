import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    GOOGLE_SIGN_IN_START,
    googleSignInSuccess,
    googleSignInFailure,
    EMAIL_SIGN_IN_START,
    emailSignInSuccess,
    emailSignInFailure,
    CHECK_USER_ACTION,
    setCurrentUser,
    SIGN_OUT_START,
    signOutSuccess,
    signOutFailure,
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    registrationSuccess,
    registrationFailure
} from './user-actions';
import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser,
    createAccountWithEmail,
    firestore
} from "firebase/firebase.settings";
import { updateUserCart } from 'redux/cart/cart-actions';

export function* signInWithGoogle() {
  try {
      const {user} = yield auth.signInWithPopup(googleProvider);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapShot = yield userRef.get();
      yield put(googleSignInSuccess({
          id: userSnapShot.id,
          ...userSnapShot.data()
      }));
      const cartRef = firestore.collection('users').doc(`${userSnapShot.id}`)
          .collection('cartItems');
      const cartSnapShot = yield cartRef.get();
      yield put(updateUserCart({items: cartSnapShot.docs[0].data().items}))
  } catch(err) {
      console.log(err);
      yield put(googleSignInFailure(err));
  }
}

export function* onGoogleSignInStart() {
   yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//takes in the action object from request
export function* signInWithEmail(action) {
    const { payload } = action;
    const { email, password } = payload;
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(emailSignInSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }));
    } catch(err) {
        put(emailSignInFailure(err));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            return;
        }
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put(setCurrentUser({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }));
    } catch(err) {
        yield put(emailSignInFailure(err));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_ACTION, isUserAuthenticated)
}

export function* onSignOut() {
   try {
      yield auth.signOut();
      yield put(signOutSuccess());
   } catch(error) {
       yield put(signOutFailure(error));
   }
}

export function* onSignOutStart() {
   yield takeLatest(SIGN_OUT_START, onSignOut);
}

export function* onRegistration(payload) {
    try {
        const {email, password, displayName } = payload;
        const { user } = yield createAccountWithEmail(email, password);
        yield put(registrationSuccess({
            user,
            additionalInfo: {displayName}
        }));
    } catch (err) {
        yield put(registrationFailure(err));
    }
}

export function* onRegistrationStart() {
    yield takeLatest(REGISTRATION_START, onRegistration)
}

export function* signInAfterRegistration(payload) {
    try {
        const { user, additionalInfo } = payload;
        const userRef = yield call(createUserProfileDocument, user, additionalInfo);
        const userSnapShot = yield userRef.get();
        yield put(setCurrentUser({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }));
    } catch(err) {
        yield put(emailSignInFailure(err));
    }
}

export function* onRegistrationSuccess() {
   yield takeLatest(REGISTRATION_SUCCESS, signInAfterRegistration);
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onRegistrationSuccess),
        call(onRegistrationStart),
    ]);
}