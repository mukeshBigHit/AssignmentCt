import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SplashView from '../../../views/splash/view';
import InputComponent from '../../../components/input/component';
import ButtonComponent from '../../../components/button/component';
import { isEmailValid } from '../../../utils/validation';

const LoginScreen = () => {
  const [isSplash, setIsSplash] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // setTimeout(() => {
  //   setIsSplash(false);
  // }, 2000);

  // if (isSplash) return <SplashView />;

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <InputComponent
          multiline
          onChange={setEmail}
          value={email}
          placeholder="Enter your email"
        />
        <InputComponent
          multiline
          onChange={setPassword}
          value={password}
          placeholder="Enter your password"
        />
      </View>
      <ButtonComponent
        style={styles.btn}
        text="Login"
        disabled={!isEmailValid(email)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  splashLogo: {
    height: 200,
    width: 200,
  },
  inputView: {
    marginVertical: 20,
    rowGap: 10,
  },
  btn: {
    marginTop: 40,
  },
});

export default LoginScreen;
