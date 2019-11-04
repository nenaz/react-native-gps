import * as React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';

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
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
  },
 });

 export class MapPage extends React.PureComponent<TMapPage> {
  state = {
    mapViewHeight: 500,
  };

  // componentDidMount() {
  //   this.props.fetchCoordinates();
  // }
  
  layoutHandle = (event: any) => {
    // console.log('event', event);
    this.setState({
      mapViewHeight: event.nativeEvent.layout.height,
    })
  };

  render() {
    const {
      coordinates,
      // fetchCoordinates,
      // gpsButtonDisabled,
      // stopCoordinates,
    } = this.props;

    return (
      <View
        style={{
          ...styles.container,
          height: this.state.mapViewHeight,
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
          >
          </MapView>
          {/* <Input
            placeholder="Password"
          /> */}
        </View>
    );
  }
}
