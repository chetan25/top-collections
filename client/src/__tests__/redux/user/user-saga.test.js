import { expectSaga } from 'redux-saga-test-plan';
import { isUserAuthenticated, onSignOut } from 'redux/user/user-sagas';
import userReducer from 'redux/user/user-reducer';
import cartReducer from 'redux/cart/cart-reducer';
import { createUserProfileDocument,  getCurrentUser, auth } from "firebase/firebase.settings";

const finalState =  {
    registrationError: null,
    signInError: null,
    currentUser: null,
    pageLoading: false,
    signInProgress: false
};

jest.mock('firebase/firebase.settings');

describe('test User Saga', () => {
    beforeEach(() => {
        jest.resetModules();
    });

  it('Test isUserAuthenticated when user not authenticated', () => {
      getCurrentUser.mockImplementation(() => {
          return new Promise((resolve, reject) => {
              resolve(null);
          });
      });
      return expectSaga(isUserAuthenticated)
          .withReducer(userReducer)
          .hasFinalState(finalState)
          .run();
  });

  it('Test onCheckUserSession when error getting user data', () => {
        getCurrentUser.mockImplementation(() => {
            throw new Error('Error Getting Error');
        });
        return expectSaga(isUserAuthenticated)
            .withReducer(userReducer)
            .hasFinalState({
                signInError: 'Error Getting Error',
                registrationError: null,
                currentUser: null,
                pageLoading: false,
                signInProgress: false
            })
            .run();
    });

  it('Test onCheckUserSession when user is already logged in', () => {
      getCurrentUser.mockImplementation(() => {
          return new Promise((resolve, reject) => {
              resolve({
                  id: '12'
              });
          });
      });

      createUserProfileDocument.mockImplementation(() => {
          return new Promise((resolve, reject) => {
              resolve({
                  get: () => {
                      return new Promise((resolve, reject) => {
                          resolve({
                              id: '12',
                              data: () => {
                                  return {
                                      createdAt: '2020/02/1',
                                      displayName: 'test',
                                      email: 'test',
                                      id: '12'
                                  }
                              }
                          });
                      });
                  }
              });
          });
      });
      const loggedUser = {
          createdAt: '2020/02/1',
          displayName: 'test',
          email: 'test',
          id: '12'
      };
      const newState = {
          currentUser: loggedUser,
          signInError: null,
          registrationError: null,
          pageLoading: false,
          signInProgress: false
      }

      return expectSaga(isUserAuthenticated)
          .withReducer(userReducer)
          .hasFinalState(newState)
          .run();
      });

  it('test the signout saga triggers cart saga', () => {
      auth.signOut.mockImplementation(() => {
          return new Promise((resolve, reject) => {
              resolve('success');
          });
      });

      const finalState = {
          hidden: true,
          cartItems: []
      };
      return expectSaga(onSignOut)
          .withReducer(cartReducer)
          .hasFinalState(finalState)
          .run();
  });
});