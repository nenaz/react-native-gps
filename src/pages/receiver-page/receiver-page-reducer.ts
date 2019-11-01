// import { FETCH_USERS, SET_ACTIVE_USER } from './receiver-page-actions';
// import { SET_ACTIVE_USER_ID } from '@/modules/users';

const INITIAL_VALUES = {};

export const ReceiverPageReducer = (state: any = INITIAL_VALUES, action: any) => {
  const { type, payload } = action;

  switch (type) {
    // case FETCH_USERS: 
    //   console.log('FETCH_USERS');
    //   return({
    //     ...state,
    //     ...payload,
    //   });
    // case SET_ACTIVE_USER: return({
    //   ...state,
    //   ...payload,
    // });
    default: return state;
  }
};
