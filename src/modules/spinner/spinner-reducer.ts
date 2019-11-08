import { SPINNER_STORE_KEY } from "./spinner-constants";
import { SPINNER_SHOW, SPINNER_HIDE } from "./spinner-actions";

const INITIAL_STATE = {
  visible: false,
};

export const spinnerReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type } = action;

  switch (type) {
    case SPINNER_SHOW:
      return ({
        visible: true,
      });
    case SPINNER_HIDE:
      return ({
        visible: false,
      })
    default:
      return state;
  }
};