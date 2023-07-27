import { Input } from '../../components/Common/Input/input'
import { NavBar } from '../../components/NavBar/NavBar'
import './styles.css'
import { useState, useEffect } from 'react'
import { SearchTopItem } from './searchtop20item'



export const Search = () => {

    const [inputFocused, setInputFocused] = useState(false);
    const [topSongs, setTopSongs] = useState([])

    const handleInputFocus = () => {
      setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
      };

       // Función asincrónica para obtener las canciones
       const fetchSongs = async () => {
        try {
          const response = await fetch("http://localhost:3001/songs/allsongs");
          const data = await response.json();
          const top20Songs = data.slice(0, 20); // Obtener solo las primeras 20 canciones
          setTopSongs(top20Songs);
        } catch (error) {
          console.error("Error al obtener las canciones:", error);
        }
      };

        useEffect(() => {
            fetchSongs();
        }, []);

    return(
        <>
            <div id='search-container'>
                <div id='search-title'>
                    <h2>Buscador</h2>
                </div>
                <div id='search-bar'>
                    <Input type='text' placeholder='¿Qué deseas escuchar?' onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                    <img className="search-bar-icon" id="search-bar-left-icon" src={inputFocused ? '../../../images/arrowleft-search.svg' : '../../../images/search.svg'} alt="" />
                    {inputFocused &&
                    <img src="../../../images/cross.svg" className="search-bar-icon" id="search-bar-right-icon" alt="" />}
                </div>
                <div id='search-list'>
                    {!inputFocused && (
                        <>
                        <h3>Top 20s</h3>
                        <div id='search-list-top-songs'>
                            {topSongs.map((song) => (
                                <SearchTopItem
                                    key={song.id_song}
                                    image={song.img}
                                    songName={song.song_name}
                                    artistName={song.artist}
                                />
                            ))}
                        </div>
                        </>
                    )}
                </div>
            </div>
            <NavBar id='search-navbar'/>
        </>
    )
}