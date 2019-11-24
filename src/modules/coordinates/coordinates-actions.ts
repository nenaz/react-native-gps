import { Dispatch } from "react";
import Geolocation from '@react-native-community/geolocation';
import { getWatchId } from './coordinates-selectors';
import { getCurrentPosition, watchPosition } from './coordinates-utils';
import { POSITION_STORE_KEY } from './coordinates-constants';

export const FETCH_CURRENT_POSITION = `${POSITION_STORE_KEY}/FETCH_CURRENT_POSITION`;
export const fetchCurrentPosition = () => async (dispatch: Dispatch<any>) => {
  const position = await getCurrentPosition();
  console.log('fetchCurrentPosition position', position);
  dispatch({
    type: FETCH_CURRENT_POSITION,
    payload: position,
  });
  dispatch(startWatchPosition(position));
};

export const FETCH_OBSERVE_POSITION = `${POSITION_STORE_KEY}/FETCH_OBSERVE_POSITION`;
export const setObservePosition = (position: any) => ({
  type: FETCH_OBSERVE_POSITION,
  payload: position,
})

export const SET_WATCH_ID = `${POSITION_STORE_KEY}/SET_WATCH_ID`;
export const startWatchPosition = (position?: any) => async (dispatch: Dispatch<any>) => {
  console.log('startWatchPosition');
  await watchPosition(dispatch, true, position);
};

export const CLEAR_WATCH_ID = `${POSITION_STORE_KEY}/CLEAR_WATCH_ID`;
export const stopWatchPosition = (stubResult?: boolean) => (dispatch: Dispatch<any>, getState: Function) => {
  const state = getState();
  const watchId = getWatchId(state);
  console.log('watchId', watchId);
  if (stubResult) {
    clearInterval(watchId);
  } else {
    Geolocation.clearWatch(watchId);
  }
  dispatch({
    type: CLEAR_WATCH_ID,
  })
};
