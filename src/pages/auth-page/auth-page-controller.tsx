import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { redirectToPage } from '../../modules/redirect/redirect';
import { fetchCurrentPosition } from '../../modules/coordinates';
import { AuthPage } from './auth-page';
import { IAuthPageController } from './auth-page-types';
import { fetchAuth } from './auth-page-actions';
import { getUserRole } from './auth-page-selectors';
// import { View } from 'react-native';
// import { Text } from 'react-native-elements';
// import { redirectToPage } from '../../modules/redirect/redirect';

class AuthPageComponent extends React.PureComponent<IAuthPageController> {
  state = {
    login: '',
    password: '',
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
    const { navigate } = this.props.navigation;
    const { login, password } = this.state;
    await this.props.fetchAuth({ login, password });
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
};

export const AuthPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPageComponent);
