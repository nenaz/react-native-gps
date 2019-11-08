import { SPINNER_STORE_KEY } from "./spinner-constants";

export const SPINNER_SHOW = `${SPINNER_STORE_KEY}/SPINNER_SHOW`;
export const spinnerShow = () => ({
  type: SPINNER_SHOW,
});

export const SPINNER_HIDE = `${SPINNER_STORE_KEY}/SPINNER_HIDE`;
export const spinnerHide = () => ({
  type: SPINNER_HIDE,
});
