import "./styles.css";

export const MusicCurrentCupid = ({song}) => {
  
 
  
  
  return (
    <>
      <div className="musicCurrentCupid-container">
      {song && song.imageUrl ? (
          <div
            className="musicCurrentCupid-mainImg"
            style={{ backgroundImage: `url(${song.imageUrl})` }}
          ></div>
        ) : (
          <div className="musicCurrentCupid-noImg">
            <p>No se obtuvo la imagen de la canción.</p>
            {/* Aquí puedes mostrar una imagen genérica en caso de que no haya una imagen */}
            {/* <img src="/ruta/a/imagen-generica.jpg" alt="Imagen Genérica" /> */}
          </div>
        )}
        <div className="musicCurrentCupid-buttons_container">
          <button className="musicCurrentCupid-buttona"></button>
          <button className="musicCurrentCupid-buttonb"></button>
        </div>
        <p className="musicCurrentCupid-theme_name">theme name</p>
      </div>
    </>
  );
};

export default MusicCurrentCupid;
