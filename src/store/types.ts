import { Dispatch } from "react"

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const CHANGE_WORD_TO_GUESS = 'CHANGE_WORD_TO_GUESS'

export interface ChangeCategory {
  type: typeof CHANGE_CATEGORY
  category: string
}

export interface ChangeWordToGuess {
  type: typeof CHANGE_WORD_TO_GUESS
  word: number | null
}

export type Action = ChangeCategory | ChangeWordToGuess

export interface State {
  selectedCategory: string
  wordToGuess: number | null
}

export interface AddressesContextType {
  state: State,
  dispatch: Dispatch<Action>
}