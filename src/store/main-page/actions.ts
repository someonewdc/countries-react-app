import {Country, MainPageTypes} from './'

export const requestCountries = () => ({ 
  type: MainPageTypes.REQUEST_COUNTRIES
}) 

export const receiveCountries = (countries: Country) => ({
  type: MainPageTypes.RECEIVE_COUNTRIES,
  payload: countries
}) 

export const invalidateCountries = () => ({
  type: MainPageTypes.INVALIDATE_COUNTRIES
})

export const setSearchText = (text: string) => ({
  type: MainPageTypes.SET_SEARCH_TEXT,
  payload: text
})

export const setRegion = (region: string) => ({
  type: MainPageTypes.SET_REGION,
  payload: region
})
