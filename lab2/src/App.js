import './App.css';
import albums from './data';
import AlbumInfo from './AlbumInfo';
import AllAlbum from './AllAlbum';
// import { useState } from 'react';

const App = () => {

  return (
    <div style={{color: "white"}}>
      <AlbumInfo coverImg={albums[0].coverImg} name={albums[0].name} tracks={albums[0].tracks} />
      <h1 style={{textAlign: 'center', fontSize: '120%', padding: '30px'}}>Select an Album</h1>
      {
        albums.map( (album) => {
          return <AllAlbum coverImg={album.coverImg} name={album.name} id={album.id}/>
        })
      }
    </div>
  )
};

export default App;
