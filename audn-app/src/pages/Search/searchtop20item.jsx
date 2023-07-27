import './styles.css'
import { useState } from 'react';
import { PlayIcon } from './play-icon';
import { PauseIcon } from './pause-icon';

export const SearchTopItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false)

    const handleItemClick = () => {
      setIsSelected(!isSelected);
    };

    const handleLikeClick = (event) => {
        event.stopPropagation();
        setIsLiked(!isLiked);
      };

    const handlePlayClick = (event) => {
        event.stopPropagation();
        setIsPlaying(!isPlaying);
      };


    return(
        <div 
            className="search-top-item-container"
            onClick={handleItemClick}>
            <div className={`overlay ${isSelected ? "selected" : ""}`}>
                {isPlaying ? <PauseIcon onClick={handlePlayClick} fill="#ffffff"/> : <PlayIcon onClick={handlePlayClick} fill="#ffffff"/>}  
                <div id='search-top-item-other-options'>
                    <img src="../../../images/three-dots-icon.svg" alt="" id='search-top-item-dots-icon'/>
                    <img src={isLiked ? '../../../images/like-active.svg' : '../../../images/like-inactive.svg'} alt=""onClick={handleLikeClick}/>
                </div>
            </div>
            <img src={props.image} alt="" className="search-top-song-image"/>
            <h5>{props.songName}</h5>
            <p>{props.artistName}</p>
        </div>
    )
}