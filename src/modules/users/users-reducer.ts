import {
  FETCH_USERS_ONLINE,
  SET_OBSERVE_USER,
  SET_ACTIVE_USER_DATA,
  ACTIVE_USER_IS_WATCHING,
} from "./users-actions";

const INITIAL_STATE = {
  allUsers: [],
  usersOnline: [],
  activeUser: {},
  observeUser: {},
};

export const usersReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS_ONLINE:
      return ({
        ...state,
        usersOnline: payload,
      });
    case SET_OBSERVE_USER:
      return ({
        ...state,
        observeUser: payload,
      });
    case SET_ACTIVE_USER_DATA:
      return ({
        ...state,
        activeUser: payload,
      });
    case ACTIVE_USER_IS_WATCHING:
      const temp = {
        ...state,
      };
      temp.activeUser.isWatching = payload;
      return ({
        ...temp,
      });
    default:
      return state;
  }
};