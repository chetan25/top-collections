import {
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE
} from './user-actions';
import { IUserState } from 'interfaces/store.interface';

interface IUserAction {
    type: string;
    payload: any;
}

const initialState: IUserState =  {
  currentUser: null,
  error: null
};
const userReducer = (state: IUserState = initialState, action: IUserAction): IUserState => {
   switch (action.type) {
       case SET_CURRENT_USER:
       case GOOGLE_SIGN_IN_SUCCESS:
       case EMAIL_SIGN_IN_SUCCESS:
       case REGISTRATION_SUCCESS:
          return {
              ...state,
              error: null,
              currentUser: action.payload
          };
       case SIGN_OUT_SUCCESS:
           return {
               ...state,
               error: null,
               currentUser: null
           };
       case GOOGLE_SIGN_IN_FAILURE:
       case EMAIL_SIGN_IN_FAILURE:
       case SIGN_OUT_FAILURE:
       case REGISTRATION_FAILURE:
           return {
               ...state,
               error: action.payload
           };
       default:
           return state;
   }
};

export default userReducer;