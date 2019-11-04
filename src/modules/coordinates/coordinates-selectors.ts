import { createSelector } from "reselect";
import { get } from 'lodash';
import { POSITION_STORE_KEY } from './coordinates-constants';

const positionState = (state: any) => state[POSITION_STORE_KEY];

export const getPosition = createSelector(
  positionState,
  (state: any): any => get(state, 'currentPosition')
);
