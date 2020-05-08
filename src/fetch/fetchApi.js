export const fetchApi = async (...args) => {
  console.log(args)
  const data = await fetch('https://restcountries.eu/rest/v2/all')
  return data.json()
}