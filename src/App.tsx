import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigation from './navigation/navigation';
import { store } from './store';
import { Provider, useDispatch } from 'react-redux';
import SplashView from './views/splash/view';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
