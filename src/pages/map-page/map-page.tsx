import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  View, StyleSheet, Text, Dimensions, TouchableOpacity,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
// import { stopWatchPosition } from '../../modules/coordinates';

interface TMapPage {
  coordinates?: any,
  isWatching?: boolean,
  stopWatchPosition?: any,
  // gpsButtonDisabled: boolean,
  // fetchCoordinates: () => void,
  // stopCoordinates: () => void,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    // height: 100,
    // width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // position: 'relative',
    // flex: 1,
    // width: '100%',
    // height: '100%',
    // padding: 10,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});


// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 100,
//     width: 400,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//     position: 'relative',
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     padding: 10,
//     // top: -300,
//   },
//  });

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
      isWatching,
      // fetchCoordinates,
      // gpsButtonDisabled,
      // stopCoordinates,
    } = this.props;
    console.log('this.state', this.state);

    return (
      <View
        style={{
          ...styles.container,
          // height: this.state.mapViewHeight,
          // width: this.state.mapViewWidth,
        }}
        // onLayout={this.layoutHandle}
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
            showsMyLocationButton={true}
            showsScale={true}
            toolbarEnabled={true}
          >
            <Marker coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}>
              <Icon name="navigation" style={{
                color: '#fff',
                backgroundColor: '#fff',
                borderColor: '#fff'
              }} />
            </Marker>
          </MapView>
          {isWatching && (
            <View style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}>
              <Icon
                type='material'
                name="remove-red-eye" style={{
                color: '#fff'
              }} />
            </View>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.bubble, styles.button]}
              onPress={this.props.stopWatchPosition}
            >
              <Text>
                {`${coordinates.latitude} - ${coordinates.longitude}`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
