import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import motionPictureReducer from "./motionPictureReducer";
import mainReducer from "./mainReducer";


let reducer = combineReducers({
    motionPicture: motionPictureReducer,
    main : mainReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers( applyMiddleware(thunkMiddleware)));
//let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;