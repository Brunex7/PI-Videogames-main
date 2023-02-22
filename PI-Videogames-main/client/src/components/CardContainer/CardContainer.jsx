import Card from "../Card/Card";
import { useSelector } from 'react-redux'
import style from './CardContainer.module.css'
const CardContainer = () =>{

    const games = useSelector(state => state.games);
    
    return(
        <div className={style.container}>
            {games.map(g =>{
                return <Card 
                name = {g.name}
                background_image = {g.background_image}
                genres = {g.genres}
                />
            })}
        </div>
    )
}

export default CardContainer;