export const AllAlbum = (props) => {
    const albumImageStyle = { borderRadius: "80px", maxWidth: "5%" };
    return (
      <div style={{ color: "white" }}>
        <div style={{ display: "flex" }}>
          <img
            src={props.coverImg}
            alt={props.name}
            style={albumImageStyle}
            onClick={()=> props.setAlbumId(props.id)}
          ></img>
          <p
            onClick={()=> props.setAlbumId(props.id)}
          >
            {props.name}
          </p>
        </div>
      </div>
    );
  };