import { GallowsComponent, Rope } from './GallowsElements'
import './styles.css'

interface Props {
  elementsToShow: number
}

const Gallows: React.FC<Props> = ({ elementsToShow }) => {

  return (
    <div className='gallows'>
      {elementsToShow > 0 && (
        <GallowsComponent />
      )}
      {elementsToShow > 1 && (
        <Rope />
      )}
    </div>
  )
}

export default Gallows