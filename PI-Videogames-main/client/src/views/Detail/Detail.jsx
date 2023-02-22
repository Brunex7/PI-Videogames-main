import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailGames } from "../../redux/action";


const Detail=()=>{

    const {id}=useParams();
    const dispatch= useDispatch();

    useEffect(()=> dispatch (getDetailGames(id)),[dispatch, id])
    
    const videogame = useSelector(state=>state.detailGame)
    
    return (
        <div>
            <div>
                <h1>{videogame.name}</h1>
            </div>
            
            <p>{videogame.description}</p>
            
            <div>
                <div>
                    <h2>Generos </h2>
                    <ul>{videogame.genres?.map(g=>(<li><p>{g}</p></li>))}</ul>
                </div>
                <div>
                    <h2>Fecha de lanzamiento </h2>
                    {videogame.released}
                </div>
                <div>
                    <h2>Rating </h2> 
                    {videogame.rating}
                </div>
                <div>
                    <h2>Plataformas </h2> 
                    <ul>{videogame.platforms?.map(p=>(<li>{p}</li>))}</ul>
                </div>
                
            </div>
        </div>
    )
}
export default Detail;