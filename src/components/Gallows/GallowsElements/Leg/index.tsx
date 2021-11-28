import classNames from 'classnames'
import './styles.css'

interface Props {
  side: 'left' | 'right'
}

const Leg: React.FC<Props> = ({ side }) => {
  const handClass = classNames(
    'leg',
    side,
  )
  return (
    <div className={handClass} />
  )
}

export default Leg