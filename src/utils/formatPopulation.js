export const formatPopulation = population => {
  const result = []
  const temp = population.toString().split('').reverse().join('').match(/\d{0,3}/g)
  temp.forEach((item, index) => index && (index !== temp.length - 1)
    ? result.push(`,${item}`) 
    : result.push(item))
  return result.join('').trim().split('').reverse().join('')
}