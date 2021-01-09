import { put, call, takeEvery } from 'redux-saga/effects'
import { MainPageTypes, MainPageActions } from '../main-page';
import { fetchAllCountries } from '../../fetchApi/fetchApi';

function* workerRequestCountries() {
  try {
    const data = yield call(fetchAllCountries)
    yield put(MainPageActions.receiveCountries(data))

  } catch (err) {

    console.error(err)
    yield put(MainPageActions.invalidateCountries())
  }
}

export function* watcherRequestCountries() {
  yield takeEvery(MainPageTypes.REQUEST_COUNTRIES, workerRequestCountries)
}
