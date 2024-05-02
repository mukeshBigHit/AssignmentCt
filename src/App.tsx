import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigation from './navigation/navigation';
import { store } from './store';
import { Provider, useDispatch } from 'react-redux';


if (__DEV__) {
  console.log('Reactotron Configured');
  require('../ReactotronConfig');
}

const App = () => {
  // const [loading, setLoading] = React.useState(false);

  // const getData = async () => {
  //   setLoading(true);
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('token');
  //     console.log('async store token', jsonValue);
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Provider store={store}>
       <MainNavigation />
    </Provider>
  );
};

export default App;
