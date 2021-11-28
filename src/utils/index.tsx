import wordsArray from "constants/wordsArray"

export const getCategoryIndex = (category: string) => {
  return wordsArray.findIndex(w => w.category === category)
}

export const getCategoryWords = (category: string) => {
  return wordsArray[getCategoryIndex(category)].words
}

export const getWordObj = (category: string, wordId: number) => {
  return wordsArray[getCategoryIndex(category)].words.find(word => word.id === wordId)!
}

export const getRandom = (max: number) => {
  return Math.floor(Math.random() * (max))
}