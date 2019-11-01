import * as React from 'react';
import { ActivityIndicator, View } from "react-native";

interface ILoadSpinner {
  visible: boolean,
};

export const LoadSpinner = ({ visible }: ILoadSpinner) => {
  if (visible) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return null;
}
