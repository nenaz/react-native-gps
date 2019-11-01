import { AboutPage } from "./pages/about";
import { AuthPage } from "./pages/auth-page";
import { Maps } from "./pages/maps";
import { ReceiverPage } from "./pages/receiver-page";

export const routes = {
  Auth: {screen: AuthPage},
  About: {screen: AboutPage},
  Maps: {screen: Maps},
  Receiver: {screen: ReceiverPage},
};

export const routePages: string[] = Object.keys(routes);
