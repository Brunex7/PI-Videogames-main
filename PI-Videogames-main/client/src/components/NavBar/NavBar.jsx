import React, { useState } from 'react';
import style from './NavBar.module.css';
import SearchBar from '../serchBar/SearchBar';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={style.mainContainer}>
      <h1>HENRRY | PI VIDEO GAMES</h1>
      <div className={style.hamburger} onClick={toggleMenu}>
        <div className={`${style.bar} ${showMenu ? style.close : ''}`} />
      </div>
      <div className={`${style.links} ${showMenu ? style.show : ''}`}>
        <a href='/home'>HOME</a>
        <a href='/create'>POST GAMES</a>
        <SearchBar />
        {showMenu && <button className={style.closeButton} onClick={closeMenu}>Close</button>}
      </div>
    </nav>
  );
};

export default NavBar;
