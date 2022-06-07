import './App.css';
import albums from './data';
import AlbumInfo from './AlbumInfo';
import { AllAlbum, albumIdArr } from './AllAlbum';
import { useState } from 'react';

const App = () => {
  const [albumId, setAlbumId] = useState(0)
  while (!(albumIdArr[0] === albumId)) {
    setAlbumId(albumIdArr[0])
  }
  return (
    <div style={{color: "white"}}>
      <AlbumInfo coverImg={albums[albumId].coverImg} name={albums[albumId].name} tracks={albums[albumId].tracks} />
      <h1 style={{textAlign: 'right', fontSize: '120%', padding: '30px'}}>Select an Album</h1>
      {
        albums.map( (album) => {
          return <AllAlbum coverImg={album.coverImg} name={album.name} id={album.id}/>
        })
      }
    </div>
  )
};

export default App;
