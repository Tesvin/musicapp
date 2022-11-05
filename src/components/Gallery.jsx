import Galleryitems from './Galleryitem';

function Gallery(props) {
  const display = props.data.map((item, index) => {
    return (
      <Galleryitems item={item} key={index}/>
    )
  })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery