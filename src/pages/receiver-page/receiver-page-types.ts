
export interface IUser {
  _id: string,
  login: string,
  coordinates: {
    lat: number,
    lon: number,
  },
  status: string,
};

export type TFollowUserParams = {
  id: string,
  login: string,
  coordinates: {
    lat: number,
    lon: number,
  },
};
