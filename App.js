import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import Route from './src/Route';
import {enableFreeze, enableScreens} from 'react-native-screens';
import createStore from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

enableFreeze(true);
enableScreens(true);
LogBox.ignoreAllLogs();
console.warn = () => {};
console.error = () => {};

const App = () => {
  const {store, persistor} = createStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar barStyle="light-content" />
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
