import * as React from 'react';
// import { useState, useEffect } from "react";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { wsConnection } from '../../server-websocket';
import {
  fetchCurrentPosition,
  getPosition,
  setObservePosition,
  getObservePosition,
  startWatchPosition,
  stopWatchPosition,
  getWatchId,
} from '../../modules/coordinates';
import { getUserRole, getUserRoleIsAdmin, getActiveUserIsWatching } from '../../modules/users';
import { MapPage } from './map-page';

interface TMapPageController {
  fetchCurrentPosition: () => void,
  startWatchPosition: () => void,
  stopWatchPosition: () => void,
  currentPosition: any,
  navigation: any,
  getUserRole: string,
  userRoleIsAdmin: boolean,
  observePosition: any,
  isWatching: boolean,
  watchPos: number,
};

class MapPageComponent extends React.PureComponent<TMapPageController> {
  ws: any = {};
  count = 0.0001;
  state = {
    coordinates: {
      longitude: 5,
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
      // console.log('message', message);
    });
    
    if (this.props.userRoleIsAdmin) {
      this.props.fetchCurrentPosition();
    }
  }

  fetchCoordinates = () => {
    console.log('fetchCoordinates')
    const { userRoleIsAdmin, startWatchPosition } = this.props;
    if (userRoleIsAdmin) {
      startWatchPosition();
    }
    
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
  };
  
  // stopCoordinates = () => {
  //   clearInterval(this.intervarGetGPS);
  //   this.setState({ gpsButtonDisabled: false });
  // };

  render() {
    console.log('this.props', this.props);
    console.log('this.props.watchPos', this.props.watchPos);
    const {
      userRoleIsAdmin,
      currentPosition,
      observePosition,
      isWatching,
      stopWatchPosition,
    } = this.props;
    const coordinaties = userRoleIsAdmin
      ? observePosition
      : currentPosition;

    return (
      <MapPage
        coordinates={coordinaties}
        isWatching={isWatching}
        stopWatchPosition={stopWatchPosition}
        // fetchCoordinates={this.fetchCoordinates}
        // gpsButtonDisabled={this.state.gpsButtonDisabled}
        // stopCoordinates={this.stopCoordinates}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPosition: getPosition,
  userRole: getUserRole,
  userRoleIsAdmin: getUserRoleIsAdmin,
  observePosition: getObservePosition,
  isWatching: getActiveUserIsWatching,
  watchPos: getWatchId,
});

const mapDispatchToProps = {
  fetchCurrentPosition,
  setObservePosition,
  startWatchPosition,
  stopWatchPosition,
};

export const MapPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPageComponent);
