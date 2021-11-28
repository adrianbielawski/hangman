import { Dispatch } from "react"

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const CHANGE_WORD_TO_GUESS = 'CHANGE_WORD_TO_GUESS'
export const CLEAR_STATE = 'CLEAR_STATE'

export interface ChangeCategory {
  type: typeof CHANGE_CATEGORY
  category: string
}

export interface ChangeWordToGuess {
  type: typeof CHANGE_WORD_TO_GUESS
  word: number | null
  uniqueLetters: string[]
}

export interface ClearState {
  type: typeof CLEAR_STATE
}

export type Action = ChangeCategory | ChangeWordToGuess | ClearState

export interface State {
  selectedCategory: string
  wordToGuess: number | null
  uniqueLetters: string[]
}

export interface AddressesContextType {
  state: State,
  dispatch: Dispatch<Action>
}