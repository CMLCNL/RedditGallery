import {fork, all} from 'redux-saga/effects';
import homeWatcher from '@redux/sagas/sagaWatchers/home/homeWatcher';

export default function* rootSaga() {
  yield all([fork(homeWatcher)]);
}
