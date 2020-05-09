const URL = 'https://restcountries.eu/rest/v2/'

export const fetchAllCountries = async () => {
  const data = await fetch(`${URL}all?fields=name;capital;population;flag;region;alpha3Code`)
  return data.json()
}

export const fetchCurrentCountry = async code => {
  const data = await fetch(`${URL}alpha/${code}`)
  return data.json()
}