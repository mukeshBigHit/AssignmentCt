import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../utils/colors';
import InputComponent from '../../components/input/component';
import ButtonComponent from '../../components/button/component';
import { setEmploye } from '../../store/employeSlice/slice';
import { storeAsync } from '../../utils/async';

const HomeScreen = () => {
  const authData: any = useSelector(state => state);
  const [data, setData] = React.useState({});



  console.log('auth', authData?.employee);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setEmploye(data));
    setData('')
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>email : {authData?.auth?.email}</Text>

      <View style={styles.contianerView}>
        <InputComponent
          multiline
          onChange={e => {
            setData({
              ...data,
              fname: e,
            });
          }}
          value={data?.fname}
          placeholder="Enter your first name"
        />
        <InputComponent
          multiline
          onChange={e => {
            setData({
              ...data,
              lname: e,
            });
          }}
          value={data?.lname}
          placeholder="Enter your last name"
        />
        <InputComponent
          multiline
          onChange={e => {
            setData({
              ...data,
              age: e,
            });
          }}
          value={data?.age?.toString()}
          placeholder="Enter your Age"
        />
        <InputComponent
          multiline
          onChange={e => {
            setData({
              ...data,
              address: e,
            });
          }}
          value={data?.address}
          placeholder="Enter your Address Line"
        />
        <InputComponent
          multiline
          onChange={e => {
            setData({
              ...data,
              cityName: e,
            });
          }}
          value={data?.cityName}
          placeholder="Enter Your City Name"
        />
        <ButtonComponent onPress={onSubmit} style={styles.btn} text="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
  },
  btn: {
    marginTop: 40,
  },
  contianerView: {
    marginTop: 28,
  },
});

export default HomeScreen;
