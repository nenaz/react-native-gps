import * as React from 'react';
import { Maps } from './maps';
import { wsConnection } from '../../server-websocket';
import { getCurrentPosition } from '../../modules/coordinates';


interface TMapController {

};

export class MapsController extends React.PureComponent<TMapController> {
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

  componentDidMount() {
    console.log('componentDidMount');
    this.ws = wsConnection.wsConnect('user');
    this.ws.on('message', (message: any) => {
      console.log('message', message);
    })
  }

  fetchCoordinates = () => {
    this.setState({ gpsButtonDisabled: true });
    this.intervarGetGPS = setInterval(async () => {
      const position = await getCurrentPosition();
      const newPos: any = { ...position };
      newPos.longitude += this.count;
      console.log('newPos', newPos);
      this.setState({
        coordinates: {
          longitude: newPos.longitude,
          latitude: newPos.latitude,
        }
      })
      this.ws.emit('message-coordinates', 'user', {
        position: {
          ...newPos,
        },
      });
      this.count += 0.0001;
    }, 2000);
  };
  
  stopCoordinates = () => {
    clearInterval(this.intervarGetGPS);
    this.setState({ gpsButtonDisabled: false });
  };

  render() {
    return (
      <Maps
        coordinates={this.state.coordinates}
        fetchCoordinates={this.fetchCoordinates}
        gpsButtonDisabled={this.state.gpsButtonDisabled}
        stopCoordinates={this.stopCoordinates}
      />
    );
  }
}

