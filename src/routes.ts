import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AuthPage } from "./pages/auth-page";
import { MapPage } from "./pages/map-page";
import { ReceiverPage } from "./pages/receiver-page";
import { ROUTES } from './route-utils';
import { RegistrationPage } from "./pages/registration-page";
import { createStackNavigator } from "react-navigation-stack";

const authSwitch = {
  [ROUTES.AUTH]: {screen: AuthPage},
  [ROUTES.REGISTRATION]: { screen: RegistrationPage },
};
export const authSwitchNavigator = createStackNavigator(authSwitch);

const appSwitch = {
  // [ROUTES.AUTH]: authSwitchNavigator,
  [ROUTES.MAP]: {screen: MapPage},
  // [ROUTES.RECEIVER]: {screen: ReceiverPage},
};
export const appSwitchNavigator = createStackNavigator(appSwitch);

const appRoutes = {
  [ROUTES.AUTH]: authSwitchNavigator,
  [ROUTES.MAP]: appSwitchNavigator,
  [ROUTES.RECEIVER]: {screen: ReceiverPage},
};
const MainNavigator = createStackNavigator(appRoutes);

export const AppRoutesNavigator = createAppContainer(
  createSwitchNavigator(
    appRoutes,
    {
      initialRouteName: 'Auth',
    },
));
