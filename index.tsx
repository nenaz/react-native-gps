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
import { appRoutes } from './src/routes';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const MainNavigator = createStackNavigator(
  appRoutes,
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      headerStyle: {
        display: 'none',
      },
    },
  },
);

// const MainNavigator = createSwitchNavigator(routes);
const Component = createAppContainer(MainNavigator);

const App: () => React$Node = () => {
  // console.log('Component', Component);
  return (
    // <View><Text>text</Text></View>
    <>
      <StatusBar />
        {/* <Header
          containerStyle={{
            height: 50,
            marginTop: 0,
            padding: 0,
          }}        
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            style: {
              marginTop: -20,
            },
          }}
          centerComponent={{
            text: 'MY TITLE',
            style: {
              color: '#fff',
              // height: 300,
              marginTop: -20,
            },
          }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}
      <Provider store={store}>
        <Component />
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: 57.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
        ></MapView> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#727272',
  },
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent(appName, () => App);
