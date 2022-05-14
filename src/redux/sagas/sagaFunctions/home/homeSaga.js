import {call, fork, put, select} from 'redux-saga/effects';
import {GET_HOME_DATA_SUCCESS} from '@redux/actions/home/homeAction';

import {getHomeDataCall} from '@redux/api/home/homeAPICall';

export function* getHomeDataSaga({data}) {
  try {
    const responseData = yield call(getHomeDataCall, data);
    yield put({
      type: GET_HOME_DATA_SUCCESS,
      data: responseData?.data?.children,
    });
  } catch (error) {
    yield put({
      type: GET_HOME_DATA_SUCCESS,
      data: {},
    });
    console.log('getHomeDataSaga ERROR:', error);
  }
}
