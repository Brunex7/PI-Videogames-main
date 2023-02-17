import axios from 'axios';

const urlDbase = 'http://localhost:3001'

export const GET_GAMES = 'GET_GAMES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';

export const getGames = () =>{
    return async function(dispatch){
        const {data} = await axios.get(`${urlDbase}/games`)
        dispatch({type: GET_GAMES, payload: data});
    };
};

export const getAllGenres = () =>{
    return async(dispatch) =>{
        const { data: allGenres } = await axios.get(`${urlDbase}/genres`);
        dispatch({type: GET_ALL_GENRES, payload: allGenres});
    };
};