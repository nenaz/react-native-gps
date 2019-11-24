import * as React from 'react';
import {
  // Button,
  // StyleSheet,
  View,
  TextInput,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auhtStyles } from './auth-page-styles';
import { AuthRegistrationView } from './views/auth-registration-view';
import { Spinner } from '../../modules/spinner';
import { ImageTest } from './views/images';
// import atanas from './atanas';

interface TAuthPage {
  onPressButton: () => void,
  onChangeLogin: (login: string) => void,
  onChangePassword: (pawwsord: string) => void,
  onRegistrationHandler: () => void,
  handleSpinnerShow: () => void,
  handleSpinnerHide: () => void,
  login: string,
  password: string,
}

export class AuthPage extends React.PureComponent<TAuthPage> {
  render() {
    // const source={atanas};
    return (
      <View style={auhtStyles.container}>
        <Spinner />
        {/* <ImageTest /> */}
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
          secureTextEntry
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: .6,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

