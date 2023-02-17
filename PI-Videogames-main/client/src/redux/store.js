import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnHancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnHancer(applyMiddleware(thunkMiddleware))
)

export default store;