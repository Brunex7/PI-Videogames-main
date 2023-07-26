import React from 'react';
import style from './SideBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../../redux/action'

const Sidebar = () => {

  const allGenres = useSelector(state => state.allGenres);
  const dispatch = useDispatch();

  const handleClick = (genre) =>{
    dispatch(filterByGenre(genre))
  }

  return (
    <div className={`${style.container} ${style.hideOnDesktop}`}>
      <h1>GENRES</h1>
      <ul>
          <li onClick={() => handleClick('all')}>All Games</li>
          {allGenres?.map((g) =>(
            <li key={g.id} onClick={() => handleClick(g.name)}>
              {g.name}
            </li>            
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
