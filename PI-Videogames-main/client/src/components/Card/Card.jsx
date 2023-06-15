import style from './Card.module.css'

const Card = ({id, key, name, background_image, genres}) => {
    return(
        <div key={key} className={style.card}>

            <div className={style.imag}>
                <img src={background_image} alt={name} />
            </div>

            <div className={style.text}>
                <a href={`/detail/${id}`}>{name}</a>
                <p>{genres.map(g => (<p>{g}</p>))}</p>
            </div>

        </div>
    )
}

export default Card;