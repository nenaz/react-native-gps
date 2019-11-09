import { createSelector } from "reselect";
import { get } from 'lodash';
import { RECEIVER_PAGE_STORE_KEY } from "./receiver-page-constants";

const getReceiverPageState = (state: any) => state[RECEIVER_PAGE_STORE_KEY];

export const getUsersOnline = createSelector(
  getReceiverPageState,
  (state: any): any[] => get(state, 'usersOnline'),
);
