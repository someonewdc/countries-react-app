import { combineReducers } from "redux";
import { countriesReducer } from "../store/Countries/reducers/countriesReducer";


export const rootReducer = combineReducers({
  countriesState: countriesReducer
})