import './styles.css'
import Keyboard from 'components/Keyboard'
import { useState } from 'react'
import CurrentResult from 'components/CurrentResult'

const GamePage = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])

  const handleLetterClick = (letter: string) => {
    setSelectedLetters([
      ...selectedLetters,
      letter
    ])
  }

  return (
    <div className='game-page'>
      <div className='grid-item gallows-wrapper'>

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
    </div>
  )
}

export default GamePage