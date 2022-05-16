import React from 'react';
import {StatusBar} from 'react-native';
import Route from './src/Route';
import createStore from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

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
