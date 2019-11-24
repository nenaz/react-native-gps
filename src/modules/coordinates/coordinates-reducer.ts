import { FETCH_CURRENT_POSITION, SET_WATCH_ID, CLEAR_WATCH_ID, FETCH_OBSERVE_POSITION } from './coordinates-actions';

const INITIAL_STATE = {
  watchId: null,
  timeoutId: null,
};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_CURRENT_POSITION:
      return ({
        ...state,
        currentPosition: payload,
      });
    case FETCH_OBSERVE_POSITION:
      return ({
        ...state,
        observePosition: payload,
      });
    case SET_WATCH_ID:
      return ({
        ...state,
        // observePosition: { ...payload.position },
        watchId: payload.watchId,
        timeoutId: payload.timeoutId,
      });
    case CLEAR_WATCH_ID:
      return ({
        ...state,
        watchId: INITIAL_STATE.watchId,
        timeoutId: INITIAL_STATE.timeoutId,
      });
    default:
      return state;
  }
};
