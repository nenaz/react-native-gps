import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { redirectToPage } from '../../modules/redirect/redirect';
import {
  fetchCurrentPosition,
  startWatchPosition,
  stopWatchPosition,
} from '../../modules/coordinates';
import { spinnerShow, spinnerHide } from '../../modules/spinner';
import { AuthPage } from './auth-page';
import { IAuthPageController } from './auth-page-types';
import { fetchAuth } from './auth-page-actions';
import { getUserRole } from './auth-page-selectors';

class AuthPageComponent extends React.PureComponent<IAuthPageController> {
  state = {
    login: 'nenaz',
    password: '4276',
  };

  static navigationOptions = {
    title: 'Welcome to the app!',
    headerStyle: {
      backgroundColor: '#fff444',
      display: 'none',
    },
  };

  componentDidMount() {
    this.props.fetchCurrentPosition();
  }

  onChangeLogin = (login: string) => this.setState({ login });
  onChangePassword = (password: string) => this.setState({ password });

  onPressButton = async () => {
    const {
      spinnerShow,
      spinnerHide,
      navigation,
    } = this.props;
    const { navigate } = navigation;
    const { login, password } = this.state;

    spinnerShow();
    await this.props.fetchAuth({ login, password });
    spinnerHide();
    console.log('user role', this.props.userRole);
    redirectToPage({ navigate, userRole: this.props.userRole });
  };

  onRegistrationHandler = () => {
    this.props.navigation.navigate('Registration');
  }
  
  render() {
    return (
      <AuthPage
        onPressButton={this.onPressButton}
        onChangeLogin={this.onChangeLogin}
        onChangePassword={this.onChangePassword}
        onRegistrationHandler={this.onRegistrationHandler}
        login={this.state.login}
        password={this.state.password}
        handleSpinnerShow={this.props.spinnerShow}
        handleSpinnerHide={this.props.spinnerHide}
      />
      // <span>TEst</span>
      // <View>
      //   <Text>Auth page</Text>
      // </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userRole: getUserRole,
});

const mapDispatchToProps = {
  fetchAuth,
  fetchCurrentPosition,
  // spinnerShow: startWatchPosition,
  // spinnerHide: stopWatchPosition,
  spinnerShow,
  spinnerHide,
};

export const AuthPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPageComponent);
