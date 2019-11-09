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
  [ROUTES.MAP]: {screen: MapPage},
  /**/
  [ROUTES.RECEIVER]: {screen: ReceiverPage},
};
export const authSwitchNavigator = createStackNavigator(authSwitch);

// const mapPageSwitch = {
//   [ROUTES.MAP]: {screen: MapPage},
// };
// const mapSwitchNavigator = createStackNavigator(mapPageSwitch);

// const receiverSwitchNavigator = createStackNavigator({
//   [ROUTES.RECEIVER]: {screen: ReceiverPage},
// });

const appRoutes = {
  [ROUTES.AUTH]: authSwitchNavigator,
  // [ROUTES.MAP]: mapSwitchNavigator,
  // [ROUTES.RECEIVER]: receiverSwitchNavigator,
};

export const AppRoutesNavigator = createAppContainer(
  createSwitchNavigator(
    appRoutes,
    {
      initialRouteName: 'Auth',
    },
));
