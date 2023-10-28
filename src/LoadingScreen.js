import React, { Component } from 'react';
import { View, Image, StyleSheet,ImageBackground,Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

class LoadingScreen extends Component {
  
  render() {
    const { width, height } = Dimensions.get('window'); 
    return (
      <ImageBackground
      source={require('./background.jpg')}
      style={{ width, height }}
      >
      <View style={styles.container}>
        <Animatable.View
              animation={{
                0: { scale: 1 },
                0.5: { scale: 1.5 },
                1: { scale: 1 },
              }}
          easing="ease-out"
          iterationCount="infinite"
          style={styles.logoContainer}
        >
          <Image
            source={require('./logo.png')} // Замените этот путь на путь к вашему логотипу
            style={styles.logo}
          />
        </Animatable.View>
      </View>
           </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 160, // Подстройте размер под ваши требования
    height: 150, // Подстройте размер под ваши требования
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default LoadingScreen;




