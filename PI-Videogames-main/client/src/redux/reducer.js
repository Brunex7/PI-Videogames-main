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
    allGenres: [],
    detailGame: [],
    genres: [],
    filterGames:[],
    orderBy: "Select",
    filterBy: "All",
    rating: [],
};


const rootRoducer = (state = initialState, action ) =>{
    switch(action.type) {
        case GET_GAMES:
            return {...state, games: action.payload};

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
            const games = state.games;
            const filterGenres = action.payload === 'all'
                ? games 
                : games.filter((games) => games.genres.includes(action.payload )) 
            return {...state,  games: filterGenres};

        case FILTER_CREATED:
            const allGames = state.games;
            const filterOring = 
                action.payload === 'created'
                    ? allGames.filter((e) => e.created)
                    : allGames.filter((e) => !e.created)
            return {...state, games: action.payload === 'all' ? state.allGames : filterOring,}

        case ORDER_BY_NAME:
            let arrName = 
            action.payload === 'desc'
            ? state.games.sort((a,b) =>{
                if(a.name > b.name) {
                    return 1;
                }
                if(a.name < b.name) {
                    return -1;
                }
                return 0;
            })
            : state.games.sort((a,b) =>{
                if(a.name > b.name) {
                    return -1;
                }
                if(a.name < b.name) {
                    return 1;
                }
                return 0;
            })
            return { ...state, games: arrName }

        case ORDER_BY_RATING:
            let arrRating = 
            action.payload === 'desc'
            ? state.games.sort((a,b) =>{
                if(a.rating > b.rating) {
                    return 1;
                }
                if(a.rating < b.rating) {
                    return -1;
                }
                return 0;
            })
            : state.games.sort((a,b) =>{
                if(a.rating > b.rating) {
                    return -1;
                }
                if(a.rating < b.rating) {
                    return 1;
                }
                return 0;
            })
            return { ...state, games: arrRating }

            default:
                return {...state}
    }
}


export default rootRoducer;