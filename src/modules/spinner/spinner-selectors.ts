import { createSelector } from "reselect";
import { get } from 'lodash';
import { SPINNER_STORE_KEY } from "./spinner-constants";

const getSpinnerState = (state: any) => state[SPINNER_STORE_KEY];

export const getSpinnerVisible = createSelector(
  getSpinnerState,
  (state: any): boolean => get(state, 'visible', false)
);
