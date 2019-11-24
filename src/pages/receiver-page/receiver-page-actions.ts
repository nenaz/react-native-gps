import { Dispatch } from 'redux';
import { isEmpty, filter } from 'lodash';
import { Send } from '../../server-interaction';
// import { setActiveUser } from '../../modules/users';
import { RECEIVER_PAGE_STORE_KEY } from './receiver-page-constants';
import { IUser, TFollowUserParams } from './receiver-page-types';

// export const FETCH_USERS_ONLINE = `${RECEIVER_PAGE_STORE_KEY}/FETCH_USERS_ONLINE`;
// export const fetchUsersOnline = () => (dispatch: Dispatch<any>, getState: () => any) => {
//   /*
//   * добавить на бэк условие, что  текущий пользователь и польз с ролью admin
//   * не участвуют в поиске отслеживаемых
//   */
//   return Send('getUsersOnline')
//     .then((response: any) => {
//       console.log('response', response);
//       const getUsersOnline = filter(response, (item: IUser) => {
//         return !isEmpty(item.coordinates);
//       });
//       console.log('getUsersOnline', getUsersOnline);
//       setActiveUser();
//       // dispatch({
//       //   type: FETCH_USERS_ONLINE,
//       //   payload: getUsersOnline,
//       // })
//     })
// };

// export const SET_ACTIVE_USER = `${RECEIVER_PAGE_STORE_KEY}/SET_ACTIVE_USER`;
// export const setActiveUser = (activeUserData: TFollowUserParams) => (
//   dispatch: Dispatch<any>) => {
//   dispatch({
//     type: SET_ACTIVE_USER,
//     payload: activeUserData,
//   })
// };
