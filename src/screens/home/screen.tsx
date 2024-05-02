import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { colors } from '../../utils/colors';

const HomeScreen = () => {
    const authData: any = useSelector(state => state);
    console.log('authData',authData)
  return (  
    <View style={styles.container}>
      <Text style={styles.text}>email : {
        authData?.auth?.email }</Text>
    </View>
  );
};


const styles= StyleSheet.create({
  container : {
    flex : 1
  },
  text : {
    fontSize : 16,
    color : colors.primary
  }
})

export default HomeScreen;
