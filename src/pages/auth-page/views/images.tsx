import * as React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
// import atanas from '../../../images/atanas.svg';
import { Image } from 'react-native-elements';


interface IImage {};

export class ImageTest extends React.PureComponent<IImage> {
  render() {
    return (
      <View style = { styles.container } >
        <ImageBackground
          source={require('../atanas2.jpg')}
          // source={{uri: '../logo.svg', width: 100, height: 100}}
          imageStyle={{resizeMode: 'stretch'}}
          style={styles.imgBackground}
        >
          <Text>Inside</Text>
        </ImageBackground>
        {/* <Image style={ styles.backgroundImage }
          // source={{uri: '../atanas.png'}}
          source = {{ uri: 'file:///C:/Work/Android/gpsNative/src/images/atanas.jpg' }}
          // source = {{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg' }}
        ></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: 100,
    opacity: .6,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
    width: 200, 
    height: 300, 
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
