import { REQUEST_COUNTRIES, RECIEVE_COUNTRIES, INVALIDATE_COUNTRIES, SET_COUNTRIES, SET_SEARCH_TEXT, SET_REGION } from "../types";

const initialState = {
  countries: [],
  loading: false,
  searchText: '',
  region: '',
  error: false,
}

export const mainPageReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case REQUEST_COUNTRIES: 
      return {
        ...state,
        error: false,
        loading: true
      }
    case RECIEVE_COUNTRIES: 
      return {
        ...state,
        error: false,
        loading: false
      }
    case INVALIDATE_COUNTRIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload
      }
    case SET_REGION: 
      return {
        ...state,
        region: payload
      }
    case SET_COUNTRIES:
      return {
        ...state,
        countries: payload
      }
    default: 
      return state
  }
}