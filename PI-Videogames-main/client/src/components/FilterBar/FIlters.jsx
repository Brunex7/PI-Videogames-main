import React, { useState } from 'react';
import {orderByName, filterCreated, filterByGenre, orederByRating} from '../../redux/action'
import { useDispatch, useSelector} from 'react-redux';
import style from "./Filter.module.css";

const Filters = () =>{

    const allGenres = useSelector(state => state.allGenres)

    const [order, setOrder] = useState('')

    const dispatch = useDispatch();

    const handlerSortByName = (e) =>{
        dispatch(orderByName(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    };

    const handlerFilterGenres = (e) =>{
        dispatch(filterByGenre(e.target.value))
    }
    

    const handlerOrderByRating = (e) =>{
        dispatch(orederByRating(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }
    console.log(handlerSortByName);

    const handlerFilterCreate = (e) =>{
        dispatch(filterCreated(e.target.value))
    }

    return(
        <div className={style.conte}>
            <select className={style.nogr} defaultValue="Order" onChange={(e) => handlerSortByName(e)}>
                <option disabled>Order</option>
                <option value='asc'>A-Z</option>
                <option value='desc'>Z-A</option>
            </select>

            <select className={style.nogr} defaultValue="Origin" onChange={(e) => handlerFilterCreate(e)}>
                <option disabled>Origin</option>
                <option value='created'>Created</option>
                <option value='existing'>Existing</option>
            </select>

            <select className={style.nogr} defaultValue="Genres" onChange={(e) => handlerFilterGenres(e)}>
                <option disabled>Genres</option>
                <option value='all'>All Games</option>
                {allGenres?.map((g) => (<option value={g.name} key={g.id}>{g.name}</option>))}
            </select>

            <select className={style.nogr} defaultValue="Rating" onChange={(e) => handlerOrderByRating(e)}>
                <option disabled>Rating</option>
                <option value="asc">Rating Top</option>
                <option value="des">Rating Down</option>
            </select>
            
        </div>
    )

};

export default Filters;