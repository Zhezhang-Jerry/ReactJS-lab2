import albums from "./data";

const AlbumInfo = () => {
    const divStyle = {padding: '10px', display: 'flex', color: 'white'};
    const songList = albums[0].tracks.map( song => {
        return (
            <div style={divStyle}>
                <li style={{width: '60px'}}>{song}</li> 
                <img style={{maxWidth: '15%'}} src="https://img.icons8.com/flat-round/64/undefined/play--v1.png" alt='play'/>
            </div>
        )
    })
    return (
        <div style={divStyle}>
            <img src={albums[0].coverImg} alt={albums[0].name}></img>
            <ol>
            {songList}
            </ol>
        </div>
    )
};

export default AlbumInfo;