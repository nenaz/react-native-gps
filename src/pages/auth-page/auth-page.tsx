import * as React from 'react';
import {
  // Button,
  // StyleSheet,
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auhtStyles } from './auth-page-styles';
import { AuthRegistrationView } from './views/auth-registration-view';

interface TAuthPage {
  onPressButton: () => void,
  onChangeLogin: (login: string) => void,
  onChangePassword: (pawwsord: string) => void,
  onRegistrationHandler: () => void,
  login: string,
  password: string,
}

export class AuthPage extends React.PureComponent<TAuthPage> {
  render() {
    return (
      <View style={auhtStyles.container}>
        <Input
          placeholder='Login1'
          containerStyle={auhtStyles.inputContainerStyle}
          onChangeText={this.props.onChangeLogin}
          value={this.props.login}
          inputStyle={auhtStyles.inputStyle}
        />
        <Input
          placeholder="Password"
          containerStyle={auhtStyles.inputContainerStyle}
          onChangeText={this.props.onChangePassword}
          value={this.props.password}
          inputStyle={auhtStyles.inputStyle}
        />
        <Button
          title='Войти'
          titleStyle={{
            color: 'black',
          }}
          onPress={this.props.onPressButton}
          containerStyle={auhtStyles.buttonContainerStyle}
          type="outline"
        />
        <AuthRegistrationView
          onRegistrationHandler={this.props.onRegistrationHandler}
        />
      </View>
    );
  }
}
