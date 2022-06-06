import albums from "./data";

const AllAlbum = () => {
    const albumImageStyle = {borderRadius: '80px', maxWidth: '5%'};
    const albumList = albums.map( album => {
        return (
            <div style={{display: 'flex'}}>
                <img src={album.coverImg} alt={album.name} style={albumImageStyle}></img>
                <p>{album.name}</p>
            </div>
        )
    });
    return (
        <div style={{color: 'white'}}>
            <h1 style={{textAlign: 'center', fontSize: '120%', padding: '30px'}}>Select an Album</h1>
            <div>
                {albumList}
            </div>
        </div>
    )
};

export default AllAlbum;