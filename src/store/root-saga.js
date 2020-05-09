import { all } from 'redux-saga/effects'
import { watcherRequestCountries } from './sagas/main-saga';
import { watcherRequestCountry } from './sagas/country-saga';

export function* rootSaga() {
  yield all([
    watcherRequestCountries(),
    watcherRequestCountry()
  ])
}