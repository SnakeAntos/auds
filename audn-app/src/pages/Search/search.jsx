import { Input } from '../../components/Common/Input/input'
import { NavBar } from '../../components/NavBar/NavBar'
import './styles.css'
import { useState, useEffect } from 'react'
import { SearchTopItem } from './searchtop20item'
import { SearchResultItem } from './searchResultItem'



export const Search = () => {

    const [inputFocused, setInputFocused] = useState(false);
    const [allSongs, setAllSongs] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const apiUrl = "http://localhost:3001";

    const handleInputFocus = () => {
      setInputFocused(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setInputFocused(false);  
        }, 50);

      };

       // Función asincrónica para obtener las canciones
       const fetchSongs = async () => {
        try {
          const response = await fetch(`${apiUrl}/songs/allsongs`);
          const data = await response.json();
          setAllSongs(data);
        } catch (error) {
          console.error("Error al obtener las canciones:", error);
        }
      };

        useEffect(() => {
            fetchSongs();
        }, []);

        const searchSongs = (query) => {
            const filteredSongs = allSongs.filter(
              (song) =>
                song.song_name.toLowerCase().includes(query.toLowerCase()) ||
                song.artist.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredSongs);
          };
        
          const handleInputChange = (event) => {
            const { value } = event.target;
            setSearchTerm(value);
            if (value.trim() === '') {
                setSearchResults([]); 
              } else {
                searchSongs(value);
              }
            };

            const handleClearSearch = (event) => {
                event.preventDefault();
                event.stopPropagation(); 
                setSearchTerm(''); 
                setSearchResults([]); 
              };


        
    return(
        <>
            <div id='search-container'>
                <div id='search-title'>
                    <h2>Buscador</h2>
                </div>
                <div id='search-bar'>
                    <Input 
                        type='text' 
                        placeholder='¿Qué deseas escuchar?' 
                        onFocus={handleInputFocus} 
                        onBlur={handleInputBlur}
                        value={searchTerm}
                        onInput={handleInputChange}/>
                    <img className="search-bar-icon" id="search-bar-left-icon" src={inputFocused ? '../../../images/arrowleft-search.svg' : '../../../images/search.svg'} alt="" />
                    {inputFocused &&
                    <img src="../../../images/cross.svg" className="search-bar-icon" id="search-bar-right-icon" alt="" onClick={handleClearSearch}/>
                    }
                </div>
                <div id='search-list'>
                    {searchTerm.trim() === '' ? (
                        <>
                        <h3>Top 20s</h3>
                        <div id='search-list-top-songs'>
                            {allSongs.slice(0, 20).map((song) => (
                                <SearchTopItem
                                    key={song.id_song}
                                    image={song.img}
                                    songName={song.song_name}
                                    artistName={song.artist}
                                />
                            ))}
                        </div>
                        </>
                    ) : (
                        <>
                        {searchTerm.trim() !== '' && searchResults.map((song) => (
                            <SearchResultItem
                                key={song.id_song}
                                image={song.img}
                                songName={song.song_name}
                                artistName={song.artist}
                        />
                        ))}
                        </>
                    )
                    }
                </div>
            </div>
            <NavBar id='search-navbar'/>
        </>
    )
}