import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Galleryitem from './Galleryitem';


function Gallery() {
  const data = useContext(DataContext)
  const display = data.map((item, index) => {
    return (
      <Galleryitem item={item} key={index}/>
    )
  })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery

//artistName
//trackName
//trackViewUrl
//artworkUrl100
//artworkUrl130
//trackTimeMillis
//previewUrl
//collectionName
