import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGames } from "../../redux/action";

const Detail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailGames(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const game = useSelector((state) => state.detailGame);

    const conteStyle = {
        color: "aliceblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${game.background_image})`, /* Agregamos el degradado */
        backgroundSize: "cover",
        padding: "20px",
    };

    const titleStyle = {
        fontSize: "xx-large",
        color: "white",
        marginBottom: "20px",
    };

    const imagStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const imgStyle = {
        width: "100%",
        maxHeight: "700px",
        marginBottom: "20px",
    };

    const descStyle = {
        fontSize: "small",
        color: "white",
        maxWidth: "1100px",
        textAlign: "justify",
        marginBottom: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "10px",
        padding: "10px",
        backdropFilter: "blur(8px)",
    };

    const gprStyle = {
        display: "flex",
        flexDirection: "column",
        color: "white",
    };

    const genStyle = {
        width: "90px",
        padding: "0",
        color: "whitesmoke",
        listStyle: "none",
    };

    const platStyle = {
        maxWidth: "250px",
        height: "20px",
        margin: "0",
        padding: "0",
        color: "whitesmoke",
        listStyle: "none",
    };

    return (
        <div style={conteStyle}>
            <div style={titleStyle}>
                <h1>{game.name}</h1>
            </div>
            <div style={imagStyle}>
                <img src={game.background_image} alt={game.name} style={imgStyle} />
                <div style={descStyle}>
                    <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
                    <div style={gprStyle}>
                        <div>
                            <h2>Genres</h2>
                            <ul style={genStyle}>{game.genres && game.genres.map(g => (<li key={g.id}>{g.name}</li>))}</ul>
                        </div>
                        <div>
                            <h2>Platforms</h2>
                            <ul style={platStyle}>{game.platforms?.map(el => el.platform.name).join(', ')}</ul>
                        </div>
                        <div>
                            <h2>Rating</h2>
                            <p>{game.rating}</p>
                        </div>
                        <div>
                            <h2>Released</h2>
                            <p>{game.released}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
