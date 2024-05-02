import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation/navigation';
import { store } from './store';
import { Provider } from 'react-redux';

if (__DEV__) {
  console.log('Reactotron Configured');
  require('../ReactotronConfig');
}

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
