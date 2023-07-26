import React, { useState } from 'react';
import { orderByName, filterCreated, filterByGenre, orederByRating } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';

const Filters = () => {
  const allGenres = useSelector(state => state.allGenres);
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');

  const handlerFilterGenre = (event) => {
    dispatch(filterByGenre(event.target.value));
  };

  const handlerFilterOrigin = (event) => {
    dispatch(filterCreated(event.target.value));
  };

  const handlerSortByName = (event) => {
    dispatch(orderByName(event.target.value));
    setOrder(`Ordered ${event.target.value}`);
  };

  const handlerSortByRating = (event) => {
    dispatch(orederByRating(event.target.value));
    setOrder(`Ordered ${event.target.value}`);
  };

  return (
    <div className={style.conte}>
      <select className={style.nogr} onChange={event => handlerSortByName(event)}>
        <option disabled>Order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <select className={style.nogr} onChange={event => handlerSortByRating(event)}>
        <option disabled>Rating</option>
        <option value="asc">Top</option>
        <option value="desc">Down</option>
      </select>

      <select className={`${style.nogr} ${style.hideOnDesktop}`} onChange={(event) => handlerFilterGenre(event)}>
        <option disabled>Genres</option>
        <option value='all'>All Games</option>
        {allGenres?.map((g) => (<option value={g.name} key={g.id}>{g.name}</option>))}
      </select>

      <select className={style.nogr} onChange={(event) => handlerFilterOrigin(event)}>
        <option disabled>Origin</option>
        <option value='created'>Created</option>
        <option value='existing'>Existing</option>
      </select>
    </div>
  );
};

export default Filters;