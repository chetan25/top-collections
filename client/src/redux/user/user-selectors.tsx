import { createSelector } from 'reselect';

export const userSelector = createSelector(
    (state: any) => state.user,
    (user) => user.currentUser
);

export const userIdSelector = createSelector(
    (state: any) => state.user,
    (user) => user.currentUser ? user.currentUser.id : null
);