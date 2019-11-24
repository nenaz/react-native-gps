
// export { setUserCoordinaterAction, setUserOnline } from './coordinates-actions';
// export { USER_STORE_KEY } from './coordinates-constants';
// export { coordinatesReducer } from './coordinates-reducer';
export { getCurrentPosition } from './coordinates-utils';
export { POSITION_STORE_KEY } from './coordinates-constants';
export {
  fetchCurrentPosition,
  startWatchPosition,
  stopWatchPosition,
  setObservePosition,
} from './coordinates-actions';
export { coordinatesReducer } from './coordinates-reducer';
export {
  getPosition,
  getObservePosition,
  getWatchId,
} from './coordinates-selectors';
