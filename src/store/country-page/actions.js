import * as types from '../types'

export const requestCountry = name => ({ 
  type: types.REQUEST_COUNTRY,
  payload: name
}) 

export const recieveCountry = countries => ({ 
  type: types.RECEIVE_COUNTRY,
  payload: countries
}) 

export const invalidateCountry = () => ({
  type: types.INVALIDATE_COUNTRY
})

export const removeCountry = () => ({
  type: types.REMOVE_COUNTRY
})
