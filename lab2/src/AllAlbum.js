let albumIdArr = [0];

export const AllAlbum = (props) => {
    const albumImageStyle = {borderRadius: '80px', maxWidth: '5%'};
    return (
        <div style={{color: 'white'}}>
            <div style={{display: 'flex'}}>
                <img src={props.coverImg} alt={props.name} style={albumImageStyle}></img>
                <p onClick={() => {albumIdArr[0] = props.id; console.log(albumIdArr);} }>{props.name}</p>
            </div>
        </div>
    )
};

export { albumIdArr };