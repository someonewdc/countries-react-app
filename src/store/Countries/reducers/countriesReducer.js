import { SET_LOADER, SET_SEARCH_TEXT, REMOVE_LOADER } from "../../types";

const initialState = {
  loading: false,
  searchText: '' 
}

export const countriesReducer = (state = initialState, { type, payload }) => {
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
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload
      }
    default: 
      return state
  }
}