import * as React from 'react';
import { ActivityIndicator, View, StyleSheet } from "react-native";

interface ILoadSpinner {
  visible: boolean,
};

export class LoadSpinner extends React.PureComponent<ILoadSpinner> {
  render() {
    const { visible } = this.props;
    console.log('visible', visible);

    return visible
      ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      : null;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: .6,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
