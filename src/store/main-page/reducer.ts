import {Country, MainPageState, MainPageTypes} from './'
import { compareNames } from "../../utils/compareNames";

const initialState: MainPageState = {
  countries: [],
  showingCountries: [],
  loading: false,
  searchText: '',
  region: '',
  error: null,
  isPlaceholder: true,
}

export const mainPageReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: unknown}
) => {
  console.log(payload)
  switch(type) {
    case MainPageTypes.REQUEST_COUNTRIES:
      return {
        ...state,
        error: false,
        loading: true
      }
    case MainPageTypes.RECEIVE_COUNTRIES:
      return {
        ...state,
        error: false,
        loading: false,
        countries: payload
      }
    case MainPageTypes.INVALIDATE_COUNTRIES:
      return {
        ...state,
        error: true,
        loading: false
      }
    case MainPageTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
        showingCountries: payload ? compareNames(state.countries, payload) : [],
        isPlaceholder: !!payload,
        region: ''
      }
    case MainPageTypes.SET_REGION:
      return {
        ...state,
        region: payload,
        showingCountries: state.countries.filter((country: Country) => country.region === payload),
        searchText: '',
        isPlaceholder: false
      }
    default: 
      return state
  }
}
