import "./styles.css";

export const ProfilePlaylistItem = (props) => {
  return (
    <div className="profile-playlist-item">
        <img src={props.image} alt="" />
        <h4>{props.name}</h4>
        <p>{props.owner}</p>
    </div>

  );
};
