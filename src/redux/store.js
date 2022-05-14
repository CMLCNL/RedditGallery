import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers/index/index';
import rootSaga from './sagas/index';

const persistConfig = {
  key: 'RedditGallery',
  storage: AsyncStorage,
  version: '1.0.0',
  blacklist: ['home'],
};

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

  const persistor = persistStore(
    store,
    null,
    //It will be sent to the general redux state to check if rehydrate done or not.
    () => {},
  );

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
