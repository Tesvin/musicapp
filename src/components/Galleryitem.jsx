import { useState } from 'react';

function Galleryitem(props) {
  let [view, setView] = useState(false);

  const simpleView = () => {
    return (
      <div>
        <h2>{props.items.trackName}</h2>
      </div>
    )
  }

  const detailView = () => {
    return(
      <div>
        <h2>{props.item.trackName}</h2>
      </div>
    )
  }
  return (
    <div onClick={() => setView(!view)} 
    style={{'display': 'inline-block'}}>

      {view ? detailView() : simpleView()}
      
    </div>
  )
}

export default Galleryitem



