import { useContext, useState } from 'react'
import './styles.css'
import { Context } from 'store'
import Keyboard from 'components/Keyboard'
import CurrentResult from 'components/CurrentResult'
import Gallows from 'components/Gallows'
import { getWordObj } from 'utils'
import classNames from 'classnames'
import Button from 'components/Button'
import { CLEAR_STATE } from 'store/types'

const GamePage = () => {
  const { state, dispatch } = useContext(Context)
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [correctGuesses, setCorrectGuesses] = useState(0)
  const [gameEnded, setGameEnded] = useState<'success' | 'failure' | null>(null)

  const validateGuess = (letter: string) => {
    if (state.uniqueLetters.includes(letter)) {
      return true
    }

    return false
  }

  const handleLetterClick = (letter: string) => {
    const isValid = validateGuess(letter)

    if (!isValid) {
      const newWrongGuesses = wrongGuesses + 1

      if (newWrongGuesses === 8) {
        setGameEnded('failure')
      }

      setWrongGuesses(newWrongGuesses)
    } else {
      const newCorrectGuesses = correctGuesses + 1

      if (newCorrectGuesses === state.uniqueLetters.length) {
        setGameEnded('success')
      }

      setCorrectGuesses(newCorrectGuesses)
    }

    setSelectedLetters([
      ...selectedLetters,
      letter
    ])
  }

  const handlePlayAgain = () => {
    dispatch({
      type: CLEAR_STATE
    })
  }

  const gameEndedClass = classNames(
    'game-ended',
    gameEnded,
  )

  return (
    <div className='game-page'>
      {!gameEnded ? (
        <>
          <div className='grid-item gallows-wrapper'>
            <Gallows elementsToShow={wrongGuesses} />
          </div>
          <div className='grid-item result-wrapper'>
            <CurrentResult selectedLetters={selectedLetters} />
          </div>
          <div className='grid-item keyboard-wrapper'>
            <Keyboard
              selectedLetters={selectedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
        </>
      ) : (
        <div className={gameEndedClass}>
          <p className='title'>
            {gameEnded === 'success'
              ? 'Congratulation!'
              : 'Failed'
            }
          </p>
          <p className='message'>
            Correct answer was "{getWordObj(state.selectedCategory, state.wordToGuess!).word}"
          </p>
          <Button onClick={handlePlayAgain}>Play Again</Button>
        </div>
      )}
    </div>
  )
}

export default GamePage