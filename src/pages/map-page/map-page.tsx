import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Button, Text, Dimensions } from 'react-native';
import { Input, Icon } from 'react-native-elements';

interface TMapPage {
  coordinates?: any,
  // gpsButtonDisabled: boolean,
  // fetchCoordinates: () => void,
  // stopCoordinates: () => void,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    // top: -300,
  },
 });

 export class MapPage extends React.PureComponent<TMapPage> {
  state = {
    mapViewHeight: Dimensions.get('window').height,
    mapViewWidth: Dimensions.get('window').width,
  };

  layoutHandle = (event: any) => {
    console.log('layoutHandle', event.nativeEvent.layout);
    this.setState({
      mapViewHeight: event.nativeEvent.layout.height,
      mapViewWidth: event.nativeEvent.layout.width,
      mapViewHeight2: Dimensions.get('window').height,
      mapViewWidth2: Dimensions.get('window').width,
    })
  };

  render() {
    const {
      coordinates,
      // fetchCoordinates,
      // gpsButtonDisabled,
      // stopCoordinates,
    } = this.props;
    console.log('this.state', this.state);

    return (
      <View
        style={{
          ...styles.container,
          height: this.state.mapViewHeight,
          width: this.state.mapViewWidth,
        }}
        onLayout={this.layoutHandle}
      >
          <MapView
            style={styles.map}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            zoomControlEnabled={true}
            minZoomLevel={10}
            maxZoomLevel={18}
            showsCompass={true}
            // showsMyLocationButton={true}
            // showsScale={true}
          >
            <Marker coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}>
              {/* <View style={{backgroundColor: "red", padding: 10}}>
                <Text >SF</Text>
              </View> */}
              <Icon name="navigation" />
            </Marker>
          </MapView>
          {/* <Input
            placeholder="Password"
          /> */}
        </View>
    );
  }
}
