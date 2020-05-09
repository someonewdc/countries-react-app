import { combineReducers } from 'redux';
import { mainPageReducer } from './main-page/reducer';
import { countryPageReducer } from './country-page/reducer';

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  countryPage: countryPageReducer
})