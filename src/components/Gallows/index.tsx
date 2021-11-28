import { GallowsComponent, Rope, Head, Body, Hand } from './GallowsElements'
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
    </div>
  )
}

export default Gallows