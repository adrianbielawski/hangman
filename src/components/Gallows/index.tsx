import { GallowsComponent, Rope, Head, Body } from './GallowsElements'
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
      {elementsToShow > 2 && (
        <Head />
      )}
      {elementsToShow > 3 && (
        <Body />
      )}
    </div>
  )
}

export default Gallows