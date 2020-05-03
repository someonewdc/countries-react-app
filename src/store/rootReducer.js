import { SET_LOADER, REMOVE_LOADER, SET_COUNTRIES } from "./types";

const initialState = {
  countries: [],
  loading: false,
}

export const rootReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_LOADER: 
      return {
        ...state,
        loading: true
      }
    case REMOVE_LOADER: 
      return {
        ...state,
        loading: false
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