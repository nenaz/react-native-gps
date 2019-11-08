
export interface IAuthPageController {
  navigation: any,
  fetchAuth: ({ login, password}: { login: string, password: string}) => any,
  userRole: string,
  onRegistrationHandler: () => void,
  fetchCurrentPosition: () => void,
  spinnerShow: () => void,
  spinnerHide: () => void,
};
