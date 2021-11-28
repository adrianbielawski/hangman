import { useContext } from 'react'
import './styles.css'
import { Context } from 'store'
import { getWordObj } from 'utils'

interface Props {
  selectedLetters: string[]
}

const CurrentResult: React.FC<Props> = ({ selectedLetters }) => {
  const { state } = useContext(Context)

  const getGuessedLetters = () => {
    const wordObj = getWordObj(state.selectedCategory, state.wordToGuess!)
    const wordsArray = wordObj.word.split(' ')

    const getLetters = (word: string) => {
      return word.split('').map((letter, index) => (
        <span
          className='letter'
          key={index}
        >
          {selectedLetters.includes(letter)
            ? letter
            : '_'
          }
        </span>
      ))
    }

    return wordsArray.map((singleWord, index) => (
      <span
        className='single-word'
        key={index}
      >
        {getLetters(singleWord)}
      </span>
    ))
  }

  return (
    <div className='current-result'>
      <p className='category'>
        {state.selectedCategory}
      </p>
      <p className='guessed-letters'>
        {getGuessedLetters()}
      </p>
    </div>
  )
}

export default CurrentResult