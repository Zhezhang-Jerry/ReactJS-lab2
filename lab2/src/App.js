import './App.css';
import albums from './data';
import AlbumInfo from './AlbumInfo';
import AllAlbum from './AllAlbum';

const App = () => {
  return (
    <div style={{color: "white"}}>
      <AlbumInfo />
      <h1 style={{textAlign: 'center', fontSize: '120%', padding: '30px'}}>Select an Album</h1>
      {
        albums.map( (album) => {
          return <AllAlbum coverImg={album.coverImg} name={album.name} />
        })
      }
      {/* <AllAlbum /> */}
    </div>
  )
};

export default App;
