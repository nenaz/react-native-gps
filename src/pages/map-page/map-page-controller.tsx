import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { wsConnection } from '../../server-websocket';
import { fetchCurrentPosition, getPosition } from '../../modules/coordinates';
import { MapPage } from './map-page';

interface TMapPageController {
  fetchCurrentPosition: () => void,
  currentPosition: any,
};

class MapPageComponent extends React.PureComponent<TMapPageController> {
  ws: any = {};
  count = 0.0001;
  state = {
    coordinates: {
      longitude: 55,
      latitude: 55,
    },
    gpsButtonDisabled: false,
  };
  intervarGetGPS: any;

  static navigationOptions = {
    title: 'Map page',
    headerStyle: {
      backgroundColor: '#fff444',
    },
  };

  componentDidMount() {
    this.ws = wsConnection.wsConnect('user');
    this.ws.on('message', (message: any) => {
      console.log('message', message);
    });
    this.props.fetchCurrentPosition();
  }

  // fetchCoordinates = () => {
  //   const position = getCurrentPosition();

  //   this.setState({ gpsButtonDisabled: true });
  //   this.intervarGetGPS = setInterval(async () => {
  //     const position = getCurrentPosition();
  //     const newPos: any = { ...position };
  //     newPos.longitude += this.count;
  //     console.log('newPos', newPos);
  //     this.setState({
  //       coordinates: {
  //         longitude: newPos.longitude,
  //         latitude: newPos.latitude,
  //       }
  //     })
  //     this.ws.emit('message-coordinates', 'user', {
  //       position: {
  //         ...newPos,
  //       },
  //     });
  //     this.count += 0.0001;
  //   }, 2000);
  // };
  
  // stopCoordinates = () => {
  //   clearInterval(this.intervarGetGPS);
  //   this.setState({ gpsButtonDisabled: false });
  // };

  render() {
    console.log('this.props', this.props);
    return (
      <MapPage
        coordinates={this.props.currentPosition}
        // fetchCoordinates={this.fetchCoordinates}
        // gpsButtonDisabled={this.state.gpsButtonDisabled}
        // stopCoordinates={this.stopCoordinates}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPosition: getPosition,
});

const mapDispatchToProps = {
  fetchCurrentPosition,
};

export const MapPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPageComponent);
