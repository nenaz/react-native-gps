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
};

export const SET_WATCH_ID = `${POSITION_STORE_KEY}/SET_WATCH_ID`;
export const startWatchPosition = () => async (dispatch: Dispatch<any>) => {
  const watchData = await watchPosition();
  console.log('watchData', watchData);
  dispatch({
    type: SET_WATCH_ID,
    payload: watchData,
  });
};

export const CLEAR_WATCH_ID = `${POSITION_STORE_KEY}/CLEAR_WATCH_ID`;
export const stopWatchPosition = () => (dispatch: Dispatch<any>, getState: Function) => {
  const state = getState();
  const watchId = getWatchId(state);
  Geolocation.clearWatch(watchId);
  dispatch({
    type: CLEAR_WATCH_ID,
  })
};
