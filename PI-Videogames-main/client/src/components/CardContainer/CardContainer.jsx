import Card from "../Card/Card";
import { useSelector } from 'react-redux'

const CardContainer = () =>{

    const games = useSelector(state => state.games);
    
    return(
        <div className="">
            {games.map(g =>{
                return <Card 
                name = {g.name}
                image = {g.image}
                genres = {g.genres}
                />
            })}
        </div>
    )
}

export default CardContainer;