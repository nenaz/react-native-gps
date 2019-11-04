import * as React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { registrationStyles } from './registration-page-styles';


export const RegistrationPage = (props: any) => (
  <View style={registrationStyles.container}>
    <Input
      placeholder='login'
      containerStyle={registrationStyles.inputContainerStyle}
      onChangeText={props.onChangeLogin}
      value={props.login}
      inputStyle={registrationStyles.inputStyle}
    />
    <Input
      placeholder="password"
      containerStyle={registrationStyles.inputContainerStyle}
      onChangeText={props.onChangePassword}
      value={props.password}
      inputStyle={registrationStyles.inputStyle}
    />
    <Input
      placeholder="confirm password"
      containerStyle={registrationStyles.inputContainerStyle}
      onChangeText={props.onChangeConfirmPassword}
      value={props.confirmPasswordpassword}
      inputStyle={registrationStyles.inputStyle}
    />
    <Button
      title='Зарегистрироваться'
      titleStyle={{
        color: 'black',
      }}
      onPress={props.onRegistrationButtonHandle}
      containerStyle={registrationStyles.buttonContainerStyle}
      type="outline"
    />
  </View>
);
