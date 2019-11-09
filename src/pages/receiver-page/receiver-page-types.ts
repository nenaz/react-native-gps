
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
  id: string,
  login: string,
  username: string,
  coordinates: {
    lat: number,
    lon: number,
  },
};
