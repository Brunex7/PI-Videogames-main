import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGames } from "../../redux/action";
import style from './Detail.module.css'

const Detail = (props) =>{

    const dispatch = useDispatch();
    

    useEffect(() =>{
        dispatch(getDetailGames(props.match.params.id));
    }, [props.match.params.id],[dispatch]);
    
    const game = useSelector((state) => state.detailGame)
    
    return (
        <div className={style.conte}>{}
            <div className={style.title}>
                <h1>{game.name}</h1>
            </div>
            <div className={style.imag}>
                <img src={game.background_image} alt={game.name} />
            </div>
            <div className={style.desc}>
                <p dangerouslySetInnerHTML={ {__html:game.description}}></p>
            </div>
            <div className={style.gpr}>
            <div>
                <h2>Genres</h2>
                
            </div>
            <div>
                <h2>Platforms</h2>
                
            </div>
            <div>
                <h2>Rating</h2>
                <p>{game.rating}</p>
            </div>
            </div>

        </div>
    )
}
export default Detail;