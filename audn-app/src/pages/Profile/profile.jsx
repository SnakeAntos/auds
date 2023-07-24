import "./styles.css";
import { NavBar } from "../../components/NavBar/NavBar";
import {ButtonOrange} from "../../components/Common/Button/buttonOrange"
import { ProfilePlaylistItem } from "./profilePlaylistItem";

export const Profile = () => {
  return (
    <>
      <div id="profile-container">
        <div id="profile-settings-icon">
          <img src="../../../images/config.svg" alt="" />
        </div>
        <div id="profile-info-container">
          <img src="../../../images/profile-image.jpg" alt="" />
          <h1>Mara Pérez 🦋</h1>
          <h4>@mara_pg</h4>
        </div>
        <div id="profile-playlists">
          <div id="profile-playlists-title">
            <h3>Mis Playlists</h3>
            <ButtonOrange text='Crear Playlist' id='profile-button-createplaylist'/>
          </div>
          <div id="profile-playlist-list">
              <ProfilePlaylistItem
                image='../../../images/playlist-cover.jpg'
                name="Me fui de gira mabel"
                owner='@mara_pg'
              />
                              <ProfilePlaylistItem
                image='../../../images/playlist-cover.jpg'
                name="Me fui de gira mabel"
                owner='@mara_pg'
              />
                              <ProfilePlaylistItem
                image='../../../images/playlist-cover.jpg'
                name="Me fui de gira mabel"
                owner='@mara_pg'
              />
          </div>
        </div>
      </div>
      <NavBar className='profile-navbar'/>
    </>
  );
};
