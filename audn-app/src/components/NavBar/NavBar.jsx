import "./styles.css";
import { useState } from "react";

export const NavBar = (props) => {

    const [activeItem, setActiveItem] = useState('Inicio');

    const handleClick = (itemName) => {
      setActiveItem(itemName);
    };

  return (
    <div id="navbar-container" className={props.className}>
        <div id="navbar-home" className={`navbar-item ${activeItem === 'Inicio' ? 'active' : ''}`} onClick={() => handleClick('Inicio')}>
            <img src={activeItem === 'Inicio' ? '../../../public/images/home-active.svg' : '../../../public/images/home-inactive.svg'} alt="" />
            <p style={{ color: activeItem === 'Inicio' ? '#26262E' : '#838486'}}>Inicio</p>
        </div>
        <div id="navbar-search" className={`navbar-item ${activeItem === 'Buscar' ? 'active' : ''}`} onClick={() => handleClick('Buscar')}>
            <img src={activeItem === 'Buscar' ? '../../../public/images/search-active.svg' : '../../../public/images/search-inactive.svg'} alt="" />
            <p style={{ color: activeItem === 'Buscar' ? '#26262E' : '#838486'}}>Buscar</p>
        </div>
        <div id="navbar-profile" className={`navbar-item ${activeItem === 'Perfil' ? 'active' : ''}`} onClick={() => handleClick('Perfil')}>
            <img src={activeItem === 'Perfil' ? '../../../public/images/profile-active.svg' : '../../../public/images/profile-inactive.svg'} alt="" />
            <p style={{ color: activeItem === 'Perfil' ? '#26262E' : '#838486'}}>Perfil</p>
        </div>
        <div id="navbar-friends" className="navbar-item">
            <img src="../../../public/images/friends-inactive.svg" alt="" />
            <p>Amigos</p>
        </div>
    </div>
  );
};
