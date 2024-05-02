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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'home-outline'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="EmployeScreen"
        component={EmployeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'finger-print-sharp'} size={25} color={color} />;
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
      const jsonValue = await AsyncStorage.getItem('token');
      console.log('async store token', jsonValue);
      dispatch(
        setAuth({
          token: jsonValue,
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
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        {/* {authData?.token ? ( */}
          <Stack.Screen
            name="Home"
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
