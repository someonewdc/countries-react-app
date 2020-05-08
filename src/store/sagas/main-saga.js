import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST_COUNTRIES } from '../types';
import { recieveCountries, invalidateCountries } from '../main-page/actions';
import { fetchApi } from '../../fetch/fetchApi';

export function* workerRequestCountries() {
  try {
    const data = yield call(fetchApi)
    yield put(recieveCountries(data))

  } catch (err) {

    console.log(err)
    yield put(invalidateCountries())
  }
}

export function* watchRequestCountries() {
  yield takeEvery(REQUEST_COUNTRIES, workerRequestCountries)
}