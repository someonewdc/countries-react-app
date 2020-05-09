export const parseLocation = url => {
  const wordsArray = url.split('/')
  return wordsArray[wordsArray.length - 1]
}