import "./styles.css";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import {ButtonOrange} from "../../components/Common/Button/buttonOrange"
import { ProfilePlaylistItem } from "./profilePlaylistItem";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { fetchUserDataByUsername } from "../../services/audn-API";

export const Profile = () => {

  const [userData, setUserData] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    // Función para obtener el user_name desde el accessToken
    const getUsernameFromAccessToken = () => {
      if (user && user.username) {
        return user.username; // Obtener el user_name directamente desde el contexto useAuth
      }
      return null;
    };

    const username = getUsernameFromAccessToken();

    // Si se obtiene el username del accessToken, realizar la solicitud para obtener los datos del usuario
    if (username) {
      fetchUserDataByUsername(username)
        .then((userData) => {
          setUserData(userData); // Actualizar el estado con los datos del usuario obtenidos
        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario: ", error);
        });
    }
  }, [user]);


  return (
    <>
      <div id="profile-container">
        <div id="profile-settings-icon">
          <img src="../../../images/config.svg" alt="" />
        </div>
        <div id="profile-info-container">
          <img src="../../../images/profile-image.jpg" alt="" />
          <h1>{userData.nickname}</h1>
          <h4>{userData.user_name}</h4>
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
