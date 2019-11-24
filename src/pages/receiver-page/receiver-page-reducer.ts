// import { FETCH_USERS_ONLINE, SET_ACTIVE_USER } from './receiver-page-actions';
// import { SET_ACTIVE_USER_ID } from '@/modules/users';

const INITIAL_VALUES = {};

export const ReceiverPageReducer = (state: any = INITIAL_VALUES, action: any) => {
  const { type, payload } = action;

  switch (type) {
    // case FETCH_USERS_ONLINE: 
    //   return({
    //     ...state,
    //     usersOnline: payload,
    //   });
    // case SET_ACTIVE_USER:
    //   return({
    //     ...state,
    //     activeUserData: payload,
    //   });
    default: return state;
  }
};
