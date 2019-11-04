import { FETCH_CURRENT_POSITION } from './coordinates-actions';

const INITIAL_STATE = {};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_CURRENT_POSITION:
      return ({
        ...state,
        currentPosition: payload,
      });
    default:
      return state;
  }
};
