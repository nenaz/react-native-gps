import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReceiverPage } from './receiver-page';
import { fetchUsersOnline, setActiveUser } from './receiver-page-actions';
import { IUser, TFollowUserParams } from './receiver-page-types';
import { getUsersOnline } from './receiver-page-selectors';
import { redirectToPage } from '../../modules/redirect/redirect';

interface IReceiverPage {
  usersOnline: IUser[],
  navigation: any,
  fetchUsersOnline: () => void,
  setActiveUser: (params: TFollowUserParams) => void,
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

  observeUser = (params: TFollowUserParams) => {
    const { navigation, setActiveUser } = this.props;
    const { navigate } = navigation;

    setActiveUser(params);
    redirectToPage({ navigate, pageName: 'Map' });
  }
  
  render() {
    const { usersOnline } = this.props;

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
  setActiveUser,
  fetchUsersOnline,
};

export const ReceiverPagerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiverPagerControllerComponent);
