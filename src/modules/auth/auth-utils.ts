// import Cookie from 'js-cookie';
// import { ACCESS_TOKEN_COOKIE_KEY } from './auth-consts';
const ACCESS_TOKEN_STORE_KEY = '@auth-token';

// export const getCurrentAuthorizationToken = () => Cookie.get(ACCESS_TOKEN_COOKIE_KEY);

import { AsyncStorage } from 'react-native';

export const getAuthToken = async () => {
  try {
    const authToken = await AsyncStorage.getItem(ACCESS_TOKEN_STORE_KEY);
    console.log(authToken);
    return authToken;
  } catch(error) {
    console.log('get error', error);
  }
};

export const setAuthToken = async (key) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_STORE_KEY, key)
  } catch (error) {
    console.log('set error', error);
  }
};
