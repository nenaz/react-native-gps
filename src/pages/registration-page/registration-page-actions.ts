import { Dispatch } from "react";
import { get } from 'lodash';
import { Send } from "../../server-interaction";

interface IFetchRegistration {
  login: string,
  password: string,
  confirmPassword: string,
};

interface IFetchRegistrationResponse {};

export const fetchRegistration = ({ login, password, confirmPassword }: IFetchRegistration) => (
  dispatch: Dispatch<any>
) => {
  return Send('newUser', {
    username: login, password, confirmPassword,
  }).then((response: IFetchRegistrationResponse) => {
    return ({
      success: get(response, 'success', false),
      login: get(response, 'username'),
    });
  });
};
