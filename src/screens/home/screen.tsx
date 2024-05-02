import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
//   const removeItem = async key => {
//     try {
//       await AsyncStorage.removeItem(key);
//       return true;
//     } catch (exception) {
//       return false;
//     }
//   };

//   useEffect(() => {
//     removeItem('token');
//   }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
