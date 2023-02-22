import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card}>
            <div className={style.imag}>
                <img src={props.background_image} alt={props.name} />
            </div>
            <div className={style.text}>
                <a href='/detail'>{props.name}</a>
                <p>{props.genres}</p>
            </div>
        </div>
    )
}

export default Card;