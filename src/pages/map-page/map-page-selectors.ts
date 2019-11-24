import { createSelector } from "reselect";
import { get } from 'lodash';
import { MAP_PAGE_STORE_KEY } from "./map-page-constants";

const mapPageState = (state: any) => state[MAP_PAGE_STORE_KEY];

export const getCurrentPosition = createSelector(
  mapPageState,
  (state: any): any => get(state, 'currentPosition')
);

export const getWatchPos = createSelector(
  mapPageState,
  (pageState: any): number => get(pageState, 'watchId')
);
