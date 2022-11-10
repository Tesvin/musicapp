import { useState } from 'react';



function Galleryitem(props) {
  let [view, setView] = useState(false);

  //code to convert milliseconds to minute
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals 
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
  }

  const simpleView = () => {
    return (
      <div className='simple'>
        <h2>{props.item.trackName}</h2>
        <small>{props.item.collectionName}collectionName</small>
        <h4>{millisToMinutesAndSeconds(props.item.trackTimeMillis)}</h4>
      </div>
    )
  }

  const detailView = () => {
    return (
      <div class="imgcontainer">
        <img src={props.item.artworkUrl100}
          alt="Avatar" class="trackimage" />
      </div>
    )
  }
  return (
    <div onClick={() => setView(!view)}
      style={{ 'display': 'inline-block' }}>

      {view ? detailView() : simpleView()}

    </div>
  )
}

export default Galleryitem



