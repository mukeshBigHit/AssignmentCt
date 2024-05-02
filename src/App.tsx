import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigation from './navigation/navigation';
import { store } from './store';
import { Provider, useDispatch } from 'react-redux';
import SplashView from './views/splash/view';

if (__DEV__) {
  console.log('Reactotron Configured');
  require('../ReactotronConfig');
}

const App = () => {
  const [isSplash, setIsSplash] = React.useState(true);

  setTimeout(() => {
    setIsSplash(false);
  }, 2000);

  if (isSplash) return <SplashView />;

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
