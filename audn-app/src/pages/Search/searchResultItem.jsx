export const SearchResultItem = (props) => {
    return(
        <div className="search-result-item">
            <img src={props.image} alt="" className="search-result-item-song-image"/>
            <div className="search-result-item-song-description">
                <h4 className="search-result-item-song-name">{props.songName}</h4>
                <h5 className="search-result-item-song-info"> Canción | {props.artistName}</h5>
            </div>
        </div>
    )
}