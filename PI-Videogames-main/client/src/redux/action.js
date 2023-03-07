import axios from 'axios';

const urlDbase = 'http://localhost:3001'

export const GET_GAMES = 'GET_GAMES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_DETAIL_GAMES = 'GET_DETAIL_GAMES';
export const GET_GAMES_NAME = 'GET_GAMES_NAME';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const POST_GAMES = 'POST_GAMES';

export const getGames = () =>{
    return async (dispatch) =>{
        const {data} = await axios.get(`${urlDbase}/games`)
        dispatch({type: GET_GAMES, payload: data});
    };
};

export const getGamesName =(name)=>{
    return async function (dispatch) {
        const { data: names } = await axios.get(`${urlDbase}/games?name=${name}`)
        dispatch({type: GET_GAMES_NAME, payload: names});
    };
};

export const getAllGenres = () =>{
    return async (dispatch) =>{
        const { data: allGenres } = await axios.get(`${urlDbase}/genres`);
        dispatch({type: GET_ALL_GENRES, payload: allGenres});
    };
};

export const getDetailGames = (id) =>{
    return async (dispatch) =>{
        const {data: detailGame } = await axios.get(`${urlDbase}/games/${id}`);
        dispatch({type: GET_DETAIL_GAMES, payload: detailGame});
    };
};

export const postGames = () =>{
    return async (dispatch) =>{
        const response = await axios.post(`${urlDbase}/games`)
        dispatch({type: POST_GAMES, payload: response})
    }
}

export const filterByGenre = (state) =>{
    return ({ type: FILTER_BY_GENRE, payload:state});
};

export const filterCreated = (state) =>{
    return ({ type: FILTER_CREATED, payload:state});
};

export const orederByRating = (state) =>{
    return ({ type: ORDER_BY_RATING, payload:state})
}

export const orderByName = (state) =>{
    return ({ type: ORDER_BY_NAME, payload: state})
}

