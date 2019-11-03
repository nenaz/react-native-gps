import { createSelector } from 'reselect';
import { get } from 'lodash';
import { AUTH_PAGE_STORE_KEY } from './auth-page-consts';

const authPageState = (state: any) => state[AUTH_PAGE_STORE_KEY];

export const getUserRole = createSelector(
  authPageState,
  (state: any): string => get(state, 'userRole')
)
