import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SplashView from '../../../views/splash/view';
import InputComponent from '../../../components/input/component';
import ButtonComponent from '../../../components/button/component';

const LoginScreen = () => {
  const [isSplash, setIsSplash] = React.useState(true);

  setTimeout(() => {
    setIsSplash(false);
  }, 2000);

  if(isSplash)return <SplashView/>

  return (
    <View style={styles.container}>
      <InputComponent
        multiline
        onChange={() => {}}
        value=""
        placeholder="Enter your email"
      />
      <InputComponent
        multiline
        onChange={() => {}}
        value=""
        placeholder="Enter your password"
      />
      <ButtonComponent
        text='Login'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashLogo: {
    height: 200,
    width: 200,
  },
});

export default LoginScreen;
