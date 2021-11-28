import './styles.css'
import Keyboard from 'components/Keyboard'
import { useState } from 'react'

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
      <div className='gallows-wrapper'>

      </div>
      <div className='result-wrapper'>
        
      </div>
      <div className='keyboard-wrapper'>
        <Keyboard
          selectedLetters={selectedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
    </div>
  )
}

export default GamePage