export const compareNames = (countriesList, searchText) => {
  const result = []

  const formatWordInName = str =>  str.substring(0, searchText.length).toLowerCase()

  const formatSearchText = () => searchText.toLowerCase().trim()

  countriesList
    .forEach(item => item.name.split(' ')
    .forEach(wordInName => formatWordInName(wordInName) === formatSearchText() ? result.push(item) : null))

  return result
}
