import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST_COUNTRY } from '../types'
import { recieveCountry, invalidateCountry } from '../country-page/actions'
import { fetchCurrentCountry } from '../../fetchApi/fetchApi'

function* workerRequestCountry({ payload }) {
  try {
    const data = yield call(fetchCurrentCountry, payload)
    yield put(recieveCountry(data))

    

  } catch (err) {

    console.log(err)
    yield put(invalidateCountry(err))
  }
  
}

export function* watcherRequestCountry() {
  yield takeEvery(REQUEST_COUNTRY, workerRequestCountry)
}