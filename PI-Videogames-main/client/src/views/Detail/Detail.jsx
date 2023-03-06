import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGames } from "../../redux/action";
import style from './Detail.module.css'

const Detail = (props) =>{

    const dispatch = useDispatch();
    

    useEffect(() =>{
        dispatch(getDetailGames(props.match.params.id));
    },[dispatch, props.match.params.id]);
    
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
            <div className={style.gen}>
                <h2>Genres</h2>
                <ul>{game.genres && game.genres?.map(g => (<p key ={g.id} >{g.name}</p>))}</ul>
            </div>
            <div className={style.plat}>
                <h2>Platforms</h2>
                <ul>{game.platforms?.map(el => el.platform.name).toString()}</ul>
            </div>
            <div> 
                <h2>Rating</h2>
                <p>{game.rating}</p>
            </div>
            <div> 
                <h2>Relased</h2>
                <p>{game.released}</p>
            </div>
            </div>

        </div>
    )
}
export default Detail;