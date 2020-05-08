import * as types from '../types'
import { compareNames } from "../../utils/compareNames";

const initialState = {
  countries: [],
  showingCountries: [],
  loading: false,
  searchText: '',
  region: '',
  error: false,
  isPlaceholder: true,
}

export const mainPageReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.REQUEST_COUNTRIES: 
      return {
        ...state,
        error: false,
        loading: true
      }
    case types.RECIEVE_COUNTRIES: 
      return {
        ...state,
        error: false,
        loading: false,
        countries: payload
      }
    case types.INVALIDATE_COUNTRIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    case types.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
        showingCountries: payload ? compareNames(state.countries, payload) : [],
        isPlaceholder: !payload ? true : false, 
        region: ''
      }
    case types.SET_REGION: 
      return {
        ...state,
        region: payload,
        showingCountries: state.countries.filter(country => country.region === payload),
        searchText: '',
        isPlaceholder: false
      }
    default: 
      return state
  }
}