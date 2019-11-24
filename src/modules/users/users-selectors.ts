import { createSelector } from 'reselect';
import { get } from 'lodash';
import { USER_ROLES } from '../auth';
import { USERS_STORE_KEY } from './users-consts';

type TUser = {
  login: string,
  username: string,
  userRole: string,
  _id: string,
};

type TUsersState = {
  activeUser: TUser,
  allUsers: TUser[],
  observeUser: TUser,
  usersOnline: TUser,
};

const usersState = (state: any): TUsersState => state[USERS_STORE_KEY];

export const getUserRole = createSelector(
  usersState,
  (state: TUsersState): string => get(state, 'activeUser.userRole')
);

export const getUserRoleIsAdmin = createSelector(
  getUserRole,
  (role: string): boolean => role === USER_ROLES.ADMIN,
);

export const getUsersOnline = createSelector(
  usersState,
  (state: TUsersState): TUser => get(state, 'usersOnline'),
);

export const getActiveUserIsWatching = createSelector(
  usersState,
  getUserRoleIsAdmin,
  (state: any, isAdmin: boolean): boolean => {
    if (!isAdmin) {
      return get(state, 'activeUser.isWatching', false);
    }
    return false;
  }
);