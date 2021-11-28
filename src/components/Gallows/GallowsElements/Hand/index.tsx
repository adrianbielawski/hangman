import classNames from 'classnames'
import './styles.css'

interface Props {
  side: 'left' | 'right'
}

const Hand: React.FC<Props> = ({ side }) => {
  const handClass = classNames(
    'hand',
    side,
  )
  return (
    <div className={handClass} />
  )
}

export default Hand