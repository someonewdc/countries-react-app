import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST_COUNTRIES } from '../types';
import { recieveCountries, invalidateCountries } from '../main-page/actions';
import { fetchAllCountries } from '../../fetchApi/fetchApi';

function* workerRequestCountries() {
  try {
    const data = yield call(fetchAllCountries)
    yield put(recieveCountries(data))

  } catch (err) {

    console.log(err)
    yield put(invalidateCountries())
  }
}

export function* watcherRequestCountries() {
  yield takeEvery(REQUEST_COUNTRIES, workerRequestCountries)
}