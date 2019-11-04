/**
 * @format
 */

import React from 'react';
import {
  AppRegistry, View, Text, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, Header } from 'react-native-elements';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import { store } from './src/store';
import { AppRoutesNavigator } from './src/routes';
// import { appRoutes, authSwitchNavigator } from './src/routes';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


// const MainNavigator = createStackNavigator(
//   appRoutes,
//   {
//     initialRouteName: 'Auth',
//     defaultNavigationOptions: {
//       headerStyle: {
//         display: 'none',
//       },
//     },
//   },
// );

// const MainNavigator = createSwitchNavigator(authSwitchNavigator);
// const Component = createAppContainer(MainNavigator);

// @ts-ignore 
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <AppRoutesNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#727272',
  }
});

AppRegistry.registerComponent(appName, () => App);
