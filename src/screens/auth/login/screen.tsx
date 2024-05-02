import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import SplashView from '../../../views/splash/view';
import InputComponent from '../../../components/input/component';
import ButtonComponent from '../../../components/button/component';
import { isEmailValid } from '../../../utils/validation';
import { colors } from '../../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../store';
import { setAuth } from '../../../store/authSlice/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [token, setToken] = React.useState('');
  const navigation = useNavigation();
  const authData: any = useSelector(state => state);
  const dispatch = useDispatch();

  // console.log('auth', authData);

  const onSubmit = async () => {
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const _res = await res.json();
      if (_res.error) {
        setError(_res.error);
        console.log('api error', _res.error);
      } else if (_res.token) {
        setToken(_res.token);
        navigation.navigate('Home', {
          screen: 'HomeScreen',
        });
        setError('');
        // console.log('api token', _res.token);
        dispatch(
          setAuth({
            email,
            token: _res.token,
          }),
        );
        storeAsync('token',_res.token);
        storeAsync('email',email);
      } else {
        console.log('api response', _res);
        setError('');
        2;
      }
    } catch (err) {
      console.log('api error', err);
    }
  };

  const storeAsync = async (key:string,value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('error while storing the token', e);
    }
  };
  // eve.holt@reqres.in

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      console.log('token', jsonValue);
    } catch (e) {
      console.log('error while getting the token', e);
      // error reading value
    }
  };

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
        <Text style={styles.text}>{error}</Text>
      </View>
      <ButtonComponent
        onPress={onSubmit}
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
  text: {
    textAlign: 'right',
    fontSize: 14,
    color: colors.red,
  },
});

export default LoginScreen;
