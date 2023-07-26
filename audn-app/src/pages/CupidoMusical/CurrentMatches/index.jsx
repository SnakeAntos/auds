import "./styles.css";

export const CurrentMatches = (props) => {
  return (
    <>
      <div className="currentMatches-container">
        <p className="currentMatches-title">{props.title}</p>
        <div className="currentMatches-imgs_container">
            <div className="currentMatches-song_img"></div>
            <div className="currentMatches-song_img"></div>
            <div className="currentMatches-song_img"></div>
            <div className="currentMatches-song_img"></div>
        </div>
        
      </div>
    </>
  );
};

export default CurrentMatches;