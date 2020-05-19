import { createSelector } from 'reselect';

export const userSelector = createSelector(
    (state: any) => state.user,
    (user) => user.currentUser
);

export const userIdSelector = createSelector(
    (state: any) => state.user,
    (user) => user.currentUser ? user.currentUser.id : null
);

export const userSignInProgressSelector = createSelector(
    (state: any) => state.user,
    (user) => user.signInProgress
);

export const userSignInErrorSelector = createSelector(
    (state: any) => state.user,
    (user) => user.signInError
);

export const userRegistrationErrorSelector = createSelector(
    (state: any) => state.user,
    (user) => user.registrationError
);