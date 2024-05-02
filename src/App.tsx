import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation/navigation';

if (__DEV__) {
  console.log('Reactotron Configured')
  require("../ReactotronConfig");
}


const App = () => {
  return <MainNavigation />;
};

export default App;
