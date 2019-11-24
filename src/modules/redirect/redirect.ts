import { get, includes } from 'lodash';
import { ROUTES } from '../../route-utils';
import { USER_ROLES } from '../auth';

interface IRedirect {
  navigate: any,
  pageName?: string,
  userRole?: string | void,
  params?: any,
};

export const redirectToPage = ({
  navigate,
  pageName,
  userRole,
  params,
}: IRedirect) => {
  // дописать проверку на отсутствие navigate
  if (!!userRole && pageName && includes(ROUTES, pageName)) {
    navigate(pageName, { ...params });
    return false;
  }
  switch (userRole) {
    case USER_ROLES.ADMIN:
      navigate('Receiver', { ...params });
      return false;
    default:
      navigate('Map', { ...params });
      return false;
  }
};