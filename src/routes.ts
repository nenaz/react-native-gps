// import { AboutPage } from "./pages/about";
import { AuthPage } from "./pages/auth-page";
import { Maps } from "./pages/maps";
import { ReceiverPage } from "./pages/receiver-page";
import { ROUTES } from './route-utils';

export const appRoutes = {
  // About: {screen: AboutPage},
  [ROUTES.AUTH]: {screen: AuthPage},
  [ROUTES.MAPS]: {screen: Maps},
  [ROUTES.RECEIVER]: {screen: ReceiverPage},
};
