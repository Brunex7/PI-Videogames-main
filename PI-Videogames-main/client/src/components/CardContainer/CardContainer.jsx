import Card from "../Card/Card";
import style from './CardContainer.module.css'
const CardContainer = ({currentGame}) =>{

    
    return(
        <div className={style.container}>
            {currentGame.map(g =>{
                return <Card
                key={g.id}
                id={g.id}
                name = {g.name}
                background_image = {g.background_image}
                genres = {g.genres}
                />
            })}
        </div>
    )
};

export default CardContainer;