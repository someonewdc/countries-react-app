import * as types from '../types'

export const requestCountries = () => ({ 
  type: types.REQUEST_COUNTRIES
}) 

export const recieveCountries = countries => ({ 
  type: types.RECIEVE_COUNTRIES,
  payload: countries
}) 

export const invalidateCountries = () => ({
  type: types.INVALIDATE_COUNTRIES
})

export const setSearchText = text => ({ 
  type: types.SET_SEARCH_TEXT,
  payload: text
})

export const setRegion = region => ({
  type: types.SET_REGION,
  payload: region
})