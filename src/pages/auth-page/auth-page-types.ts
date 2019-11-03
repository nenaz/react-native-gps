
export interface IAuthPageController {
  navigation: any,
  fetchAuth: ({ login, password}: { login: string, password: string}) => any,
  userRole: string,
};
