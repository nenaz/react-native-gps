import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

export const getCurrentPosition = () => {
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

export const watchPosition = () => {
  return new Promise((resolve, reject) => {
    const watchId = Geolocation.watchPosition((position: GeolocationResponse) => {
      resolve({
        watchId,
        position: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });
  });
};
