import { Dispatch } from "react";
import { isEmpty, filter } from 'lodash';
import { Send } from '../../server-interaction';
import { USERS_STORE_KEY } from "./users-consts";
import {
  TActiveUserData,
  TSetActiveUserIsWatchingResponse,
  TSetActiveUserIsWatching,
} from "./users-types";

export const FETCH_USERS_ONLINE = `${USERS_STORE_KEY}/FETCH_USERS_ONLINE`;
export const fetchUsersOnline = () => (dispatch: Dispatch<any>, getState: () => any) => {
  /*
  * добавить на бэк условие, что  текущий пользователь и польз с ролью admin
  * не участвуют в поиске отслеживаемых
  */
  return Send('getUsersOnline')
    .then((response: any) => {
      console.log('response', response);
      const getUsersOnline = filter(response, (item: any) => {
      // const getUsersOnline = filter(response, (item: IUser) => {
        return !isEmpty(item.coordinates);
      });
      console.log('getUsersOnline', getUsersOnline);
      // setActiveUser();
      dispatch({
        type: FETCH_USERS_ONLINE,
        payload: getUsersOnline,
      });
    })
};

export const SET_OBSERVE_USER = `${USERS_STORE_KEY}/SET_OBSERVE_USER`;
export const setObserveUser = (activeUserData: any) => ({
// export const setActiveUser = (activeUserData: TFollowUserParams) => ({
  type: SET_OBSERVE_USER,
  payload: activeUserData,
});

export const SET_ACTIVE_USER_DATA = `${USERS_STORE_KEY}/SET_ACTIVE_USER_DATA`;
export const setActiveUserData = (data: TActiveUserData) => ({
  type: SET_ACTIVE_USER_DATA,
  payload: data,
});

export const ACTIVE_USER_IS_WATCHING = `${USERS_STORE_KEY}/ACTIVE_USER_IS_WATCHING`;
export const setActiveUserIsWatching = ({
  _id,
  isWatching,
}: TSetActiveUserIsWatching) => (dispatch: Dispatch<any>) => {
  console.log('_id', _id);
  return Send('activeUserIsWatching', { _id, isWatching })
    .then((response: TSetActiveUserIsWatchingResponse) => {
      console.log('response', response);
      dispatch({
        type: ACTIVE_USER_IS_WATCHING,
        payload: isWatching,
      });
    });
}
