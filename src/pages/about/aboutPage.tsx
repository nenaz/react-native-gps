import * as React from 'react';
import { View, Button } from 'react-native';
// import { Page, Navbar } from 'framework7-react';

interface IAboutPage {};

export class AboutPage extends React.PureComponent<IAboutPage> {
  render() {
    return (
      <View>
        <Button title="ABout" onPress={() => {}}/>
      </View>
    );
  }
}
