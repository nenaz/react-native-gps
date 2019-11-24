import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { get } from 'lodash';
import { FETCH_OBSERVE_POSITION, SET_WATCH_ID } from './coordinates-actions';
import { Dispatch } from 'react';

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

export const watchPosition = (
  dispatch: Dispatch<any>,
  stubResult?: boolean,
  position?: GeolocationResponse,
) => {
  if (!stubResult) {
    return new Promise((resolve, reject) => {
      const watchId = Geolocation.watchPosition((position: GeolocationResponse) => {
        resolve({
          watchId,
          position: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error: any) => console.log(error),
      {
        distanceFilter: 1,
        maximumAge: 0,
      });
    });
  } else {
    let count = 0.001;
    let timeoutId;
    const intervalId = setInterval(() => {
      count += 0.001;
      return new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          dispatch({
            type: FETCH_OBSERVE_POSITION,
            payload: {
              latitude: get(position, 'latitude', 0) + count,
              longitude: get(position, 'longitude', 0),
            },
          });
        }, 1000);
      });
    }, 2000);
    dispatch({
      type: SET_WATCH_ID,
      payload: {
        watchId: intervalId,
        timeoutId,
      },
    });
  }
};
