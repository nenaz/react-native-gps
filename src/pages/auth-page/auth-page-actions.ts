import { get } from 'lodash';
import { Dispatch } from 'react';
import { Send } from '../../server-interaction';
import { getAuthToken, setAuthToken } from '../../modules/auth';
import { spinnerHide, spinnerShow } from '../../modules/spinner';
import { AUTH_PAGE_STORE_KEY } from './auth-page-consts';
import { setActiveUserData } from '../../modules/users';

type TFetchAuth = {
  login: string,
  password: string,
};

type TFetchAuthResponse = {
  _id: string,
  auth: string,
  coordinates: {
    lat: number,
    lon: number,
  },
  hash: string,
  id: number,
  isOnline: boolean,
  login: string,
  passcode: string,
  password: string,
  status: number,
  token: string,
  userRole: string,
  username: string,
};

export const AUTH_USER = `${AUTH_PAGE_STORE_KEY}/AUTH_USER`;
export const fetchAuth = ({ login, password }: TFetchAuth) => (dispatch: Dispatch<any>) => {
  return Send('authUser', {
    username: login,
    password,
  }).then((response: TFetchAuthResponse) => {
    console.log('response', response);
    if (response.token) {
      setAuthToken(response.token);
      dispatch(setActiveUserData({
        username: response.username,
        userRole: response.userRole,
        login: response.login,
        _id: response._id,
      }));
      dispatch({
        type: AUTH_USER,
        payload: {
          _id: response._id,
          token: response.token,
        },
      });
    }
  });
};
