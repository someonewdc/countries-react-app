export const compareNames = (namesArray, determinant) => {
  const result = []

  const formatedWord = str =>  str.substring(0, determinant.length).toLowerCase()

  const formatedDeterminant = () => determinant.toLowerCase().trim()

  namesArray
    .forEach(item => item.name.split(' ')
    .forEach(word => formatedWord(word) === formatedDeterminant() ? result.push(item) : null))

  return result
}