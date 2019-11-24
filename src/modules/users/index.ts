
export { usersReducer } from './users-reducer';
export { USERS_STORE_KEY } from './users-consts';
export {
  fetchUsersOnline,
  setObserveUser,
  setActiveUserData,
  setActiveUserIsWatching,
} from './users-actions';
export {
  getUserRole,
  getUsersOnline,
  getUserRoleIsAdmin,
  getActiveUserIsWatching,
} from './users-selectors';
export { TSetActiveUserIsWatching } from './users-types';

