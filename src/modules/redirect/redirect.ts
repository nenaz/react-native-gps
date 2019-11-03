import { get, includes } from 'lodash';
import { ROUTES } from '../../route-utils';
import { USER_ROLES } from '../auth';

interface IRedirect {
  navigate: any,
  pageName?: string,
  userRole?: string,
};

export const redirectToPage = ({
  navigate,
  pageName,
  userRole,
}: IRedirect) => {
  // дописать проверку на отсутствие navigate
  if (pageName && includes(ROUTES, pageName)) {
    navigate(pageName);
    return false;
  }
  switch (userRole) {
    case USER_ROLES.ADMIN:
      navigate('Receiver');
      return false;
    default:
      navigate('Maps');
      return false;
  }
};