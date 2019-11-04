import { get } from 'lodash';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

export const getCurrentPosition = () => {
  // const geolocation = get(navigator, 'geolocation');
  // return new Promise((resolve, reject) => {
  //   geolocation.getCurrentPosition((position) => {
  //     const obj = {
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     };
  //     resolve(obj);
  //   });
  // });
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition((position: GeolocationResponse) => {
      console.log('position', position);
      const { latitude, longitude } = position.coords;
      const obj = {
        latitude,
        longitude,
      };
      resolve(obj);
    });
  });
};
