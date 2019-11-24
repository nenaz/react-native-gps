import { AUTH_USER } from './auth-page-actions';

const INITIAL_STATE = {};

export const AuthPageReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case AUTH_USER:
      return ({
        ...state,
        ...payload,
      })
    default:
      return state;
  }
};
