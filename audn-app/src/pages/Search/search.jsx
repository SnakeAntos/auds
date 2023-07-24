import { Input } from '../../components/Common/Input/input'
import { NavBar } from '../../components/NavBar/NavBar'
import './styles.css'
import { useState } from 'react'
import { SearchTopItem } from './searchtop20item'



export const Search = () => {

    const [inputFocused, setInputFocused] = useState(false);

    const handleInputFocus = () => {
      setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
      };



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
                    <h3>{inputFocused ? 'Búsquedas recientes' : 'Top 20s'}</h3>
                    <div id='search-list-top-songs'>
                        <SearchTopItem
                            image='../../../images/song-image.jpg'
                            songName='Flowers'
                            artistName='Miley Cyrus'
                        />
                        <SearchTopItem
                            image='../../../images/song-image.jpg'
                            songName='Flowers'
                            artistName='Miley Cyrus'
                        />
                    </div>
                </div>
            </div>
            <NavBar id='search-navbar'/>
        </>
    )
}