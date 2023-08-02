import "./styles.css";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import {ButtonOrange} from "../../components/Common/Button/buttonOrange"
import { ProfilePlaylistItem } from "./profilePlaylistItem";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { fetchUserDataByUsername } from "../../services/audn-API";
import ConfigIcon from "../../../public/images/config.svg"


export const Profile = () => {

  const [userData, setUserData] = useState();
  const { user } = useAuth();

  useEffect(() => {
    let username = null
    let accessToken = null
    if(user !== null) {
      username = user 
    } else {
      username = localStorage.getItem('username');
      accessToken = localStorage.getItem('accessToken');
    }
    fetchUserDataByUsername(username,accessToken)
    .then(data => (setUserData(data)))
  },[])


  return (
    <>
      <div id="profile-container">
        <div id="profile-settings-icon">
          <img src={ConfigIcon} alt="" />
        </div>
        <div id="profile-info-container">
          <img src="../../../images/profile-image.jpg" alt="" />
          <h1>{userData && userData.nickname}</h1>
          <h4>@{userData && userData.user_name}</h4>
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
          </div>
        </div>
      </div>
      <NavBar className='profile-navbar'/>
    </>
  );
};
