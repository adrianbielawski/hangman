import { GallowsComponent, Rope, Head, Body, Hand, Leg } from './GallowsElements'
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
      {elementsToShow > 4 && (
        <Hand side='left' />
      )}
      {elementsToShow > 5 && (
        <Hand side='right' />
      )}
      {elementsToShow > 6 && (
        <Leg side='left' />
      )}
      {elementsToShow > 7 && (
        <Leg side='right' />
      )}
    </div>
  )
}

export default Gallows