import { Send } from '../../server-interaction';
import { getAuthToken, setAuthToken } from '../../modules/auth';
import { AUTH_PAGE_STORE_KEY } from './auth-page-consts';
import { spinnerHide, spinnerShow } from '../../modules/spinner';

export const FETCH_AUTH = `${AUTH_PAGE_STORE_KEY}/FETCH_USERS`;
export const fetchAuth = ({ login, password }) => (dispatch: Function) => {
  spinnerShow();
  return Send('authUser', {
    username: login,
    password,
  }).then(async (response: any) => {
    console.log('response', response);
    // const authToken = await getAuthToken();
    // setAuthToken(authToken);
    dispatch({
      type: FETCH_AUTH,
      payload: response,
    });
    spinnerHide();
    return response.userRole;
  });
};
