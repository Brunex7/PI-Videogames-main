import {
        GET_ALL_GENRES,
        GET_GAMES
} from './action';

const initialState = {
    games: [],
};


const rootRoducer = (state = initialState, action ) =>{
    switch(action.type) {
        case GET_GAMES:
            return {...state, games: action.payload}
         
        case GET_ALL_GENRES: 
            return state.allGenres.length
                ? {...state}
                : {...state, allGenres: action.payload};    
            
            
            
            default:
                return {...state}
    }
}


export default rootRoducer;