import './styles.css'

export const SearchTopItem = (props) => {
    return(
        <div className='search-top-item-container'>
            <img src={props.image} alt="" className='search-top-song-image'/>
            <h5>{props.songName}</h5>
            <p>{props.artistName}</p>
        </div>
    )
}