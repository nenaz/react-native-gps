/**
 * @format
 */

import React from 'react';
import {
  AppRegistry, View, Text, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { name as appName } from './app.json';
import { store } from './src/store';
import { routes } from './src/routes';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const MainNavigator = createStackNavigator(routes, {initialRouteName: 'Auth'});

// const MainNavigator = createSwitchNavigator(routes);
const Component = createAppContainer(MainNavigator);

const App: () => React$Node = () => {
  // console.log('Component', Component);
  return (
    // <View><Text>text</Text></View>
    <View style={styles.container}>
      <Provider store={store}>
        {/* <Component /> */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: 57.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
        ></MapView>
        <Text>Te333t</Text>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent(appName, () => App);
