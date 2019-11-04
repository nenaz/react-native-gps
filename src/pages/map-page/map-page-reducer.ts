import { FETCH_CURRENT_POSITION } from "./map-page-actions";

const INITIAL_STATE = {};

export const mapPageReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_CURRENT_POSITION:
      return ({
        ...state,
        currentPosition: payload,
      });
    default:
      return state;
  }
};
