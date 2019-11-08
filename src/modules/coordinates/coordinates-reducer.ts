import { FETCH_CURRENT_POSITION, SET_WATCH_ID, CLEAR_WATCH_ID } from './coordinates-actions';

const INITIAL_STATE = {
  watchId: 0,
};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_CURRENT_POSITION:
      return ({
        ...state,
        currentPosition: payload,
      });
    case SET_WATCH_ID:
      return ({
        ...state,
        currentPosition: { ...payload.position },
        watchId: payload.watchId,
      });
    case CLEAR_WATCH_ID:
      return ({
        ...state,
        watchId: INITIAL_STATE.watchId,
      });
    default:
      return state;
  }
};
