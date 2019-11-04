import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { auhtStyles } from "../auth-page-styles";

interface IAuthRegistrationView {
  onRegistrationHandler: () => void,
};

export const AuthRegistrationView = (props: IAuthRegistrationView) => (
  <View style={{
    flexDirection: 'row',
    marginTop: 100,
    alignContent: 'space-between'
  }}>
    <Button
      title='Войти'
      titleStyle={{
        color: 'black',
      }}
      containerStyle={auhtStyles.buttonContainerStyle}
      type="outline"
      disabled
    />
    <Button
      title='Зарегистрироваться'
      titleStyle={{
        color: 'black',
      }}
      onPress={props.onRegistrationHandler}
      containerStyle={auhtStyles.buttonContainerStyle}
      type="outline"
    />
  </View>
);