const AllAlbum = (props) => {
    console.log(props)
    const albumImageStyle = {borderRadius: '80px', maxWidth: '5%'};
    return (
        <div style={{color: 'white'}}>
            <div style={{display: 'flex'}}>
                <img src={props.coverImg} alt={props.name} style={albumImageStyle}></img>
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default AllAlbum;