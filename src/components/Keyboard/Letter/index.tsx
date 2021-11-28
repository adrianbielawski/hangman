import classNames from "classnames"
import './styles.css'

interface Props {
  letter: string
  selected: boolean
  onClick: (letter: string) => void
}

const Letter: React.FC<Props> = ({ letter, selected, onClick }) => {
  const letterClass = classNames(
    'keyboard-letter',
    {
      selected,
    },
  )

  const handleClick = () => {
    onClick(letter)
  }

  return (
    <div
      className={letterClass}
      onClick={handleClick}
    >
      {letter}
    </div>
  )
}

export default Letter