import { SET_LOADER, REMOVE_LOADER, SET_COUNTRIES } from "./types";
import axios from 'axios'

const setLoader = () => ({ 
  type: SET_LOADER 
}) 

const removeLoader = () => ({ 
  type: REMOVE_LOADER
}) 

const setCountries = countries => ({
  type: SET_COUNTRIES,
  payload: countries
})

export const fetchCountriesAC = (type = 'all', param) => {
  return async dispatch => {

    dispatch(setLoader())
    let url

    switch (type) {
      case 'name': 
        url = `https://restcountries.eu/rest/v2/name/${param}`
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
      dispatch(removeLoader())
    } catch (e) {
      console.log(e)
    }
    
  }
}