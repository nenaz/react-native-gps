import * as React from 'react';
import {
  // Button,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

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
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: '55%',
            paddingLeft: 6,
          }}
          underlineColorAndroid="#428AF8"
          placeholder="Login"
          onChangeText={this.props.onChangeLogin}
          value={this.props.login}
        />
        <TextInput
          style={{
            height: 40,
            width: '50%',
            paddingLeft: 6,
          }}
          underlineColorAndroid="#428AF8"
          placeholder="Password"
          onChangeText={this.props.onChangePassword}
          value={this.props.password}
        />
        <Button
          title='Войти'
          onPress={this.props.onPressButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#727272',
    alignItems: 'center',
    justifyContent: 'center',
  }
});