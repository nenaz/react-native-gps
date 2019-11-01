import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { routeToPage } from '@/modules/routes';
// import { getUsers } from './receiver-page-selectors';
import { ReceiverPage } from './receiver-page';
// import { fetchAllUsers, setActiveUser } from './receiver-page-actions';
import { IUser, TFollowUserParams } from './receiver-page-types';

interface IReceiverPage {
  // users: IUser[],
  // fetchAllUsers: () => void,
  // followUser?: (params: TFollowUserParams) => void,
  // setActiveUser: (params: TFollowUserParams) => void,
};

class ReceiverPagerControllerComponent extends React.PureComponent<IReceiverPage> {
  // componentDidMount() {
  //   this.props.fetchAllUsers();
  // }

  // routeToPage = (pageName: string) =>{
    
  // };

  // followUser = (params: TFollowUserParams) => {
  //   console.log('id', params);
  //   this.props.setActiveUser(params);
  //   this.routeToPage('mapPage');
  // }
  
  render() {
    // const { users } = this.props;

    return(
      <ReceiverPage
        // users={users}
        // handlefollowUser={this.followUser}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // users: getUsers,
  // stateShowMapPage: getStateMapPage,
});

const mapDispatchToProps = {
  // setActiveUser,
  // fetchAllUsers,
};

export const ReceiverPagerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceiverPagerControllerComponent);
