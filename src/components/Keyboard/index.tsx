import './styles.css'
import letters from 'constants/letters'
import Letter from './Letter'

interface Props {
  selectedLetters: string[]
  onLetterClick: (letter: string) => void
}

const Keyboard: React.FC<Props> = ({ selectedLetters, onLetterClick }) => {
  const letterComponents = letters.map((letter, index) => {
    const isSelected = selectedLetters.includes(letter)

    return (
      <li key={index}>
        <Letter
          letter={letter}
          selected={isSelected}
          onClick={onLetterClick}
        />
      </li>
    )
  })

  return (
    <ul className='keyboard'>
      {letterComponents}
    </ul>
  )
}

export default Keyboard