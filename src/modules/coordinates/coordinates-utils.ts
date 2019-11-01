import { get } from 'lodash';

export const getCurrentPosition = () => {
  const geolocation = get(navigator, 'geolocation');
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((position) => {
      // console.log('positon', position);
      const obj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      resolve(obj);
    });
  });
};
