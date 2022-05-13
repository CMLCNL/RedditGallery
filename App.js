import React from 'react';
import {LogBox} from 'react-native';
import Route from './src/Route';
import {enableFreeze, enableScreens} from 'react-native-screens';

enableFreeze(true);
enableScreens(true);
LogBox.ignoreAllLogs();
console.warn = () => {};
console.error = () => {};

const App = () => {
  return <Route />;
};

export default App;
