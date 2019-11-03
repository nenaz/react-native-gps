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

interface TAuthPage {
  onPressButton: () => void,
  onChangeLogin: (login: string) => void,
  onChangePassword: (pawwsord: string) => void,
  login: string,
  password: string,
}

export class AuthPage extends React.PureComponent<TAuthPage> {
  render() {
    return (
      <View style={auhtStyles.container}>
        <Input
          placeholder='Login'
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
          containerStyle={{
            height: 40,
            width: '55%',
            marginTop: 10,
            backgroundColor: '#fff',
          }}
          type="outline"
        />
      </View>
    );
  }
}
