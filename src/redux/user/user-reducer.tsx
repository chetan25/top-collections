import { SET_CURRENT_USER } from './user-actions';
import { IUserState } from 'interfaces/store.interface';

interface IUserAction {
    type: string;
    payload: any;
}

const initialState: IUserState =  {
  currentUser: null
};
const userReducer = (state: IUserState = initialState, action: IUserAction): IUserState => {
   switch (action.type) {
       case SET_CURRENT_USER:
          return {
              ...state,
              currentUser: action.payload
          };
       default:
           return state;
   }
};

export default userReducer;