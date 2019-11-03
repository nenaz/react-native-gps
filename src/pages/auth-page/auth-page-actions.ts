import { get } from 'lodash';
import { Dispatch } from 'react';
import { Send } from '../../server-interaction';
import { getAuthToken, setAuthToken } from '../../modules/auth';
import { spinnerHide, spinnerShow } from '../../modules/spinner';
import { AUTH_PAGE_STORE_KEY } from './auth-page-consts';

type TFetchAuth = {
  login: string,
  password: string,
};

export const AUTH_USER = `${AUTH_PAGE_STORE_KEY}/AUTH_USER`;
export const fetchAuth = ({ login, password }: TFetchAuth) => (dispatch: Dispatch<any>) => {
  // spinnerShow();
  return Send('authUser', {
    username: login,
    password,
  }).then(async (response: any) => {
    console.log('response', response);
    // const authToken = await getAuthToken();
    setAuthToken(response.token);
    dispatch({
      type: AUTH_USER,
      // payload: omit(response, 'token'),
      payload: response,
    });
    // spinnerHide();
    // return get(response, 'userRole', 'emoty');
  });
};
