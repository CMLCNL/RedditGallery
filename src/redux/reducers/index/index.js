import {combineReducers} from 'redux';
import homeReducer from '@redux/reducers/home/homeReducer';
import {persistReducer} from 'redux-persist';

import {homePersistConfig} from '@redux/reducers/index/configs';

const rootReducer = combineReducers({
  home: persistReducer(homePersistConfig, homeReducer),
});

export default rootReducer;
