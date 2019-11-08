import { createSelector } from "reselect";
import { get } from 'lodash';
import { POSITION_STORE_KEY } from './coordinates-constants';

const getPositionState = (state: any) => state[POSITION_STORE_KEY];

export const getPosition = createSelector(
  getPositionState,
  (state: any): any => get(state, 'currentPosition')
);

export const getWatchId = createSelector(
  getPositionState,
  (state: any): number => get(state, 'watchId')
);
