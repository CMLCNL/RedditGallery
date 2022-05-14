import {all, spawn, takeLeading} from 'redux-saga/effects';
import {getHomeDataSaga} from '@redux/sagas/sagaFunctions/home/homeSaga';
import {GET_HOME_DATA_REQUEST} from '@redux/actions/home/homeAction';

function* getHomeDataWatcher() {
  yield takeLeading(GET_HOME_DATA_REQUEST, getHomeDataSaga);
}

function* homeWatchers() {
  yield all([spawn(getHomeDataWatcher)]);
}

export default homeWatchers;
