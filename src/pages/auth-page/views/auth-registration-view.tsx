import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { auhtStyles } from "../auth-page-styles";

interface IAuthRegistrationView {
  onRegistrationHandler: () => void,
  handleSpinnerShow: () => void,
  handleSpinnerHide: () => void,
};

export const AuthRegistrationView = (props: IAuthRegistrationView) => (
  <View style={{
    flexDirection: 'row',
    marginTop: 100,
    alignContent: 'space-between'
  }}>
    <Button
      title='Show'
      titleStyle={{
        color: 'black',
      }}
      containerStyle={auhtStyles.buttonContainerStyle}
      type="outline"
      onPress={props.handleSpinnerShow}
      disabled
    />
    <Button
      title='Hide'
      titleStyle={{
        color: 'black',
      }}
      containerStyle={auhtStyles.buttonContainerStyle}
      type="outline"
      onPress={props.handleSpinnerHide}
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