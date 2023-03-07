import {
        GET_ALL_GENRES,
        GET_GAMES,
        GET_DETAIL_GAMES,
        GET_GAMES_NAME,
        FILTER_BY_GENRE,
        FILTER_CREATED,
        ORDER_BY_NAME,
        ORDER_BY_RATING,
        POST_GAMES,
} from './action';

const initialState = {
    games: [],
    detailGame: [],
    allGenres: [],
    allVideogames: [],
};


const rootRoducer = (state = initialState, action ) =>{
    switch(action.type) {
        case GET_GAMES:
            return {...state, games: action.payload, allVideogames: action.payload};

        case POST_GAMES:
            return{...state,}
         
        case GET_ALL_GENRES: 
            return state.allGenres.length
                ? {...state}
                : {...state, allGenres: action.payload};  

        case GET_GAMES_NAME:
            return{...state, games: action.payload};
                
        case GET_DETAIL_GAMES:
            return{...state, detailGame: action.payload};
        
        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames;
            const filterGenres = action.payload === 'all'
                ? allVideogames
                : allVideogames.filter((game) => game.genres.includes(action.payload )) 
                console.log(filterGenres);
            return {...state,  games: filterGenres};

        case FILTER_CREATED:
            const allGames = state.allVideogames;
            const filterOring = 
                action.payload === 'created'
                    ? allGames.filter((e) => e.created === true)
                    : allGames.filter((e) => e.created === false)
            return {...state, games: action.payload === 'all' ? allGames : filterOring}

        case ORDER_BY_NAME: return{
            ...state,
            games: [...state.games].sort((a,b) =>{
                if(action.payload === 'asc'){
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                } else {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                }
            })
        }
        case ORDER_BY_RATING: return{
            ...state,
            games: [...state.games].sort((a,b) =>{
                if(action.payload === 'asc'){
                    if (a.rating < b.rating) return -1;
                    if (a.rating > b.rating) return 1;
                    return 0;
                } else {
                    if (a.rating < b.rating) return 1;
                    if (a.rating > b.rating) return -1;
                    return 0;
                }
            })
        }

            default:
                return {...state};
    }
}


export default rootRoducer;