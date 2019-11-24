import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  fetchUsersOnline,
  setObserveUser,
  getUsersOnline,
} from '../../modules/users';
import { setObservePosition } from '../../modules/coordinates';
import { redirectToPage } from '../../modules/redirect/redirect';
import { ReceiverPage } from './receiver-page';
import { IUser, TFollowUserParams } from './receiver-page-types';
import {
  setActiveUserIsWatching,
  TSetActiveUserIsWatching,
} from '../../modules/users';

interface IReceiverPage {
  usersOnline: any,
  navigation: any,
  fetchUsersOnline: () => void,
  setObserveUser: (options: TFollowUserParams) => void,
  setObservePosition: (coordinates: any) => void,
  setActiveUserIsWatching: ({ _id, isWatching }: TSetActiveUserIsWatching) => void,
};

class ReceiverPagerControllerComponent extends React.PureComponent<IReceiverPage> {
  static navigationOptions = {
    title: 'Receiver page',
    headerStyle: {
      backgroundColor: '#fff444',
    },
  };

  componentDidMount() {
    this.props.fetchUsersOnline();
  }

  observeUser = (options: TFollowUserParams) => {
    const {
      navigation,
      setObserveUser,
      setObservePosition,
      setActiveUserIsWatching,
    } = this.props;
    const { navigate } = navigation;

    setObserveUser(options);
    setObservePosition(options.coordinates);
    setActiveUserIsWatching({
      _id: options._id,
      isWatching: true,
    });
    redirectToPage({
      navigate,
      pageName: 'Map',
      // userRole: undefined, 
      // params: {
      //   _id: options._id,
      //   coordinates: options.coordinates,
      // },
    });
  }
  
  render() {
    const { usersOnline } = this.props;
    console.log('usersOnline', usersOnline);
    return(
      <ReceiverPage
        usersOnline={usersOnline}
        handleObserveUser={this.observeUser}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  usersOnline: getUsersOnline,
});

const mapDispatchToProps = {
  setObserveUser,
  fetchUsersOnline,
  setObservePosition,
  setActiveUserIsWatching,
};

export const ReceiverPagerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiverPagerControllerComponent);
