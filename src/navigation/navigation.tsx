import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EmployeScreen from '../screens/employe/screen';
import HomeScreen from '../screens/home/screen';
import LoginScreen from '../screens/auth/login/screen';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../store/authSlice/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'home-outline'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Employees"
        component={EmployeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Ionicons name={'people'} size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  const dispatch = useDispatch();
  const authData: any = useSelector(state => state?.auth);

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const email = await AsyncStorage.getItem('email');
      // console.log('async store token', token);
      dispatch(
        setAuth({
          token: token,
          email : email
        }),
      );
    } catch (e) {
      console.log('error while getting the token', e);
      // error reading value
    }
  };

  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  useEffect(() => {
    getData();
    // removeItem('token');
  }, []);

  console.log('line 77 ', authData?.token);

  // if (authData?.token) {
  //   console.log('log');
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}>
        {/* {authData?.token ? ( */}
          <Stack.Screen
            name="HomeStack"
            options={{ headerShown: false }}
            component={MyTabs}
          />
        {/* ) : ( */}
          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
