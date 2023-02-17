

const Card = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
            <p>Genres:{props.genres}</p>
        </div>
    )
}

export default Card;