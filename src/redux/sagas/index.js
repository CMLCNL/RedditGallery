import {fork, all, spawn} from 'redux-saga/effects';
import homeWatcher from '@redux/sagas/sagaWatchers/home/homeWatcher';

export default function* rootSaga() {
  yield all([fork(homeWatcher)]);
}
