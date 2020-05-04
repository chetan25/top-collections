export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS';
export const GOOGLE_SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';

export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const EMAIL_SIGN_IN_SUCCESS = 'EMAIL_SIGN_IN_SUCCESS';
export const EMAIL_SIGN_IN_FAILURE = 'EMAIL_SIGN_IN_FAILURE';

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const CHECK_USER_ACTION = 'CHECK_USER_ACTION';

export const setCurrentUser = (user: any) => {
  return {
      type: SET_CURRENT_USER,
      payload: user
  }
};

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user: any) => ({
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = () => ({
    type: GOOGLE_SIGN_IN_FAILURE
});

export const emailSignInStart = (email: string, password: string) => ({
    type: EMAIL_SIGN_IN_START,
    payload: {
        email,
        password
    }
});

export const emailSignInSuccess = (user: any) => ({
    type: EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = () => ({
    type: EMAIL_SIGN_IN_FAILURE
});

export const checkUserSession = () => ({
   type: CHECK_USER_ACTION
});

export const signOutStart = () => ({
   type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: any) => ({
    type: SIGN_OUT_FAILURE,
    payload: error
});

export const registrationStart = (email: string, password: string, displayName: string) => ({
    type: REGISTRATION_START,
    payload: {
        email,
        password,
        displayName
    }
});

export const registrationSuccess = ({user, additionalInfo}: {user: any, additionalInfo: any}) => ({
    type: REGISTRATION_SUCCESS,
    payload: {
        user,
        additionalInfo
    }
});

export const registrationFailure = (error: any) => ({
    type: REGISTRATION_FAILURE,
    payload: error
});
