import { REQUEST_COUNTRIES, RECIEVE_COUNTRIES, INVALIDATE_COUNTRIES, SET_COUNTRIES, SET_SEARCH_TEXT, SET_REGION } from "../types";
import axios from 'axios'

const requestCountries = () => ({ 
  type: REQUEST_COUNTRIES 
}) 

const recieveCountries = () => ({ 
  type: RECIEVE_COUNTRIES
}) 

const invalidateCountries = () => ({
  type: INVALIDATE_COUNTRIES
})

const setCountries = countries => ({
  type: SET_COUNTRIES,
  payload: countries
})

export const setSearchText = text => ({ 
  type: SET_SEARCH_TEXT,
  payload: text
})

export const setRegion = region => ({
  type: SET_REGION,
  payload: region
})

export const fetchCountriesAC = (type = 'all', param) => {
  return async dispatch => {
    dispatch(requestCountries())
    let url

    switch (type) {
      case 'name': 
        url = param ? `https://restcountries.eu/rest/v2/name/${param}` : `https://restcountries.eu/rest/v2/all`
        break
      case 'region':
        url = `https://restcountries.eu/rest/v2/region/${param}`
        break
      case 'all':
        url = `https://restcountries.eu/rest/v2/all`
        break
      default: 
        break
    }

    try {
      const response = await axios({
        method: 'GET',
        url: url
      })
      const { data } = response
      dispatch(setCountries(data))
      dispatch(recieveCountries())
    } catch (e) {
      dispatch(invalidateCountries())
    }
    
  }
}