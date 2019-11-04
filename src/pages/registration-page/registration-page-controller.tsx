import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { RegistrationPage } from './registration-page';
import { fetchRegistration } from './registration-page-actions';
import { Alert } from '../../modules/alert';

interface IfetchRegistrationParams {
  login: string,
  password: string,
  confirmPassword: string,
};

interface IAboutPage {
  fetchRegistration: (params: IfetchRegistrationParams) => any,
  navigation: any,
};

export class RegistrationPageComponent extends React.PureComponent<IAboutPage> {
  state = {
    login: '',
    password: '',
    confirmPassword: '',
  };

  static navigationOptions = {
    title: 'Registration page',
    headerStyle: {
      backgroundColor: '#fff444',
    },
  };

  onChangeLogin = (login: string) => this.setState({ login });
  onChangePassword = (password: string) => this.setState({ password });
  onChangeConfirmPassword = (confirmPassword: string) => this.setState({ confirmPassword });

  onRegistrationButtonHandle = async () => {
    const { login, password, confirmPassword } = this.state;
    const responseObject = await this.props.fetchRegistration({
      login, password, confirmPassword,
    });
    console.log('success', responseObject.success);
    if (responseObject.success) {
      Alert({
        title: 'Success',
        text: `Пользователь с логином ${responseObject.login} успешно создан. Будет редирект на начальный экран.`,
        buttons: [
          {
            text: 'Понятно',
            onPress: () => this.onRedirect(),
          },
        ],
        options: {
          cancelable: false,
        },
      });
    }
  };

  onRedirect = () => {
    this.props.navigation.navigate('Auth')
  };

  render() {
    return (
      <RegistrationPage
        onChangeLogin={this.onChangeLogin}
        onChangePassword={this.onChangePassword}
        onChangeConfirmPassword={this.onChangeConfirmPassword}
        onRegistrationButtonHandle={this.onRegistrationButtonHandle}
        login={this.state.login}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  fetchRegistration,
};

export const RegistrationPageController = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPageComponent);
