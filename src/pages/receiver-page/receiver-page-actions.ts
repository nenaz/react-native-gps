// import { Dispatch } from 'redux';
// import { isEmpty, filter } from 'lodash';
// import { Send } from '@/utils/server-interaction';
// import { RECEIVER_PAGE_STORE_KEY } from './receiver-page-constants';
// import { IUser, TFollowUserParams } from './receiver-page-types';

// interface IResponseUsers {
//   users: IUser[],
// };

// export const FETCH_USERS = `${RECEIVER_PAGE_STORE_KEY}/FETCH_USERS`;

// export const fetchAllUsers = () => (dispatch: Dispatch<any>, getState: () => any) => {
//   return Send('getUsers')
//     // .then((response: IResponseUsers | unknown) => {
//     .then((response: any) => {
//       console.log('response', response);
//       const gpsUsers = filter(response, (item: IUser) => {
//         return !isEmpty(item.coordinates);
//       });
//       console.log('gpsUsers', gpsUsers);
//       dispatch({
//         type: FETCH_USERS,
//         payload: {
//           users: gpsUsers,
//         },
//       })
//     })
// };

// export const SET_ACTIVE_USER = `${RECEIVER_PAGE_STORE_KEY}/SET_ACTIVE_USER`;

// export const setActiveUser = (params: TFollowUserParams) => (
//   dispatch: Dispatch<any>) => {
//   dispatch({
//     type: SET_ACTIVE_USER,
//     payload: {
//       activeUser: params, 
//     }
//   })
// };
