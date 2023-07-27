import "./styles.css";

export const MusicCurrentCupid = ({song, onNextSong, onLikeSong}) => { 

  const handleNextSong = () => {
    onNextSong();
  }
  const handleLike = () => {    
    onLikeSong();
  };

  const handleLikeAndNext = () =>{
    onLikeSong();
    onNextSong();
  }
  
  return (
    <>
      <div className="musicCurrentCupid-container">
      {song && song.img ? (
          <div
            className="musicCurrentCupid-mainImg"
            style={{ backgroundImage: `url(${song.img})` }}
          ></div>
        ) : (
          <div className="musicCurrentCupid-noImg">
            <p>No se obtuvo la imagen de la canción.</p>            
          </div>
        )}
        <div className="musicCurrentCupid-buttons_container">
          <button className="musicCurrentCupid-buttona" onClick={handleLikeAndNext}></button>
          <button className="musicCurrentCupid-buttonb" onClick={handleNextSong}></button>
        </div>
        <p className="musicCurrentCupid-theme_name">{song.song_name}</p>
      </div>
    </>
  );
};

export default MusicCurrentCupid;
