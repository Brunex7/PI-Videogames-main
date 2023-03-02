import style from './Card.module.css'

const Card = ({id, name, background_image, genres}) => {
    return(
        <div>

            <div className={style.imag}>
                <img src={background_image} alt={name} />
            </div>

            <div className={style.text}>
                <a href={`/detail/${id}`}>{name}</a>
                <ul>{genres.map(g => (<li>{g}</li>))}</ul>
            </div>

        </div>
    )
}

export default Card;