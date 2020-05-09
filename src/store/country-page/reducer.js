import * as types from '../types'

const initialState = {
  currentCountry: {},
  loading: false,
  error: null
} 

export const countryPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_COUNTRY:
      return {
        ...state,
        loading: true
      }
    case types.RECIEVE_COUNTRY:
      return {
        ...state,
        loading: false,
        currentCountry: payload
      }
    case types.INVALIDATE_COUNTRY:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.REMOVE_COUNTRY: 
      return {
        ...state,
        currentCountry: {},
      }
    default: 
      return state
  }
}