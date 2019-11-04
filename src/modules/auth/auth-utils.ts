import AsyncStorage from '@react-native-community/async-storage';

const ACCESS_TOKEN_STORE_KEY = '@auth-token';

export const getAuthToken = async () => {
  try {
    const authToken = await AsyncStorage.getItem(ACCESS_TOKEN_STORE_KEY);
    console.log(authToken);
    return authToken;
  } catch(error) {
    console.log('get error', error);
  }
};

export const setAuthToken = async (key: string) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_STORE_KEY, key)
  } catch (error) {
    console.log('set error', error);
  }
};
