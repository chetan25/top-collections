import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    EMAIL_SIGN_IN_START,
    REGISTRATION_START,
    GOOGLE_SIGN_IN_START
} from './user-actions';
import { IUserState } from 'interfaces/store.interface';

interface IUserAction {
    type: string;
    payload: any;
}

const initialState: IUserState =  {
    currentUser: null,
    signInError: null,
    registrationError: null,
    pageLoading: true,
    signInProgress: false
};
const userReducer = (state: IUserState = initialState, action: IUserAction): IUserState => {
   switch (action.type) {
       case SET_CURRENT_USER:
           return {
               registrationError: null,
               signInError: null,
               currentUser: action.payload,
               pageLoading: false,
               signInProgress: false
           };
       case GOOGLE_SIGN_IN_SUCCESS:
       case EMAIL_SIGN_IN_SUCCESS:
       case REGISTRATION_SUCCESS:
          return {
              registrationError: null,
              signInError: null,
              currentUser: action.payload,
              pageLoading: false,
              signInProgress: false
          };
       case SIGN_OUT_SUCCESS:
           return {
               registrationError: null,
               signInError: null,
               currentUser: null,
               pageLoading: false,
               signInProgress: false
           };
       case GOOGLE_SIGN_IN_FAILURE:
       case EMAIL_SIGN_IN_FAILURE:
       case SIGN_OUT_FAILURE:
           return {
               ...state,
               registrationError: null,
               signInError: action.payload,
               pageLoading: false,
               signInProgress: false
           };
       case REGISTRATION_FAILURE:
           return {
               ...state,
               signInError: null,
               registrationError: action.payload,
               pageLoading: false,
               signInProgress: false
           };
       case EMAIL_SIGN_IN_START:
       case REGISTRATION_START:
       case GOOGLE_SIGN_IN_START:
           return {
               registrationError: null,
               signInError: null,
               currentUser: null,
               pageLoading: false,
               signInProgress: true
           }
       default:
           return state;
   }
};

export default userReducer;