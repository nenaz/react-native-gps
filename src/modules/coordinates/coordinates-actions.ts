import { Dispatch } from "react";
import { getCurrentPosition } from './coordinates-utils';
import { POSITION_STORE_KEY } from './coordinates-constants';

export const FETCH_CURRENT_POSITION = `${POSITION_STORE_KEY}/FETCH_CURRENT_POSITION`;
export const fetchCurrentPosition = () => async (dispatch: Dispatch<any>) => {
  const position = await getCurrentPosition();
  console.log('fetchCurrentPosition position', position);
  dispatch({
    type: FETCH_CURRENT_POSITION,
    payload: position,
  });
};
