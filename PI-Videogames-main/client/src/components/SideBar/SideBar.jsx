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
    <div className={style.container}>
      <h1>GENEROS</h1>
      <ul>
          <p onClick={() => handleClick('all')}>All Games</p>
          {allGenres?.map((g) =>(
            <p key={g.id} onClick={() => handleClick(g.name)}>
              {g.name}
            </p>            
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
