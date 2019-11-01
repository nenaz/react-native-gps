import * as React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, Button } from 'react-native';

interface TMaps {
  coordinates?: any,
  gpsButtonDisabled: boolean,
  fetchCoordinates: () => void,
  stopCoordinates: () => void,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

 export class Maps extends React.PureComponent<TMaps> {
   render() {
    const {
      coordinates,
      fetchCoordinates,
      gpsButtonDisabled,
      stopCoordinates,
    } = this.props;

    return (
      <View style={styles.container}>
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
        <Button
          title="GetNew"
          onPress={fetchCoordinates}
          disabled={gpsButtonDisabled}
        />
        <Button
          title="Stop"
          onPress={stopCoordinates}
          disabled={!gpsButtonDisabled}
        />
      </View>
    );
  }
}
