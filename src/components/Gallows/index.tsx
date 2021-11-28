import { GallowsComponent } from './GallowsElements'
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
    </div>
  )
}

export default Gallows