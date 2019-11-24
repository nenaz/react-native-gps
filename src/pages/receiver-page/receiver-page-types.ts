
export interface IUser {
  _id: string,
  login: string,
  coordinates: {
    lat: number,
    lon: number,
  },
  status: string,
  username: string,
};

export type TFollowUserParams = {
  _id: string,
  login: string,
  username: string,
  coordinates: {
    latitude: number,
    longitude: number,
  },
};
