import { createContext } from 'react'
import { cloneDeep } from 'lodash'
import {
  Action,
  AddressesContextType,
  CHANGE_CATEGORY,
  CHANGE_WORD_TO_GUESS,
  CLEAR_STATE,
  State,
} from './types'

export const initialState: State = {
  selectedCategory: '',
  wordToGuess: null,
  uniqueLetters: []
}

const initialContext: AddressesContextType = {
  state: initialState,
  dispatch: () => {}
}

export const Context = createContext(initialContext)

export const reducer = (state: State, action: Action) => {
  const newState = cloneDeep(state);
  switch (action.type) {
    case CHANGE_CATEGORY:
      newState.selectedCategory = action.category
      return newState
    case CHANGE_WORD_TO_GUESS:
      newState.wordToGuess = action.word
      newState.uniqueLetters = action.uniqueLetters
      return newState;
    case CLEAR_STATE:
      return initialState;
    default:
      throw new Error('Invalid Action');
  }
}