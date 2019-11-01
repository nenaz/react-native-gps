import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { redirectToPage } from '../../modules/redirect/redirect';
import { AuthPage } from './auth-page';
import { IAuthPageController } from './auth-page-types';
import { fetchAuth } from './auth-page-actions';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class AuthPageComponent extends React.PureComponent<IAuthPageController> {
  state = {
    login: '',
    password: '',
  };

  onChangeLogin = (login: string) => this.setState({ login });
  onChangePassword = (password: string) => this.setState({ password });

  onPressButton = async () => {
    const { navigate } = this.props.navigation;
    const { login, password } = this.state;
    // const userRole = await this.props.fetchAuth({ login, password });
    navigate('Maps');
    // redirectToPage({ navigate, userRole });
  };
  
  render() {
    return (
      <AuthPage
        onPressButton={this.onPressButton}
        onChangeLogin={this.onChangeLogin}
        onChangePassword={this.onChangePassword}
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

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  fetchAuth,
};

export const AuthPageController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPageComponent);
