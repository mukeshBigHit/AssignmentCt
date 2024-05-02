import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const SplashView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash-tesla.jpg')}
        style={styles.splashLogo}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashLogo: {
    flex: 1,
    width: '100%',
  },
});
export default SplashView;
