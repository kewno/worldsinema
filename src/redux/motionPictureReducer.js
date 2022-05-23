import {motionPictureAPI} from "../api/api";

const SET_ACTIVE_CINEMA = 'SET_ACTIVE_CINEMA';
const SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE';
const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES';
const ADD_COMMENT = 'ADD_COMMENT';
const SET_GENRES = 'SET_GENRES';
const SET_PICTURE = 'SET_PICTURE';
const SET_COUNT_PICTURE = 'SET_COUNT_PICTURE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_COMMENTS = 'SET_COMMENTS';

export const setActiveCinema = (picture) => {
    return {type: SET_ACTIVE_CINEMA, picture};
}

export const setActiveGenre = (genre) => {
    return {type: SET_ACTIVE_GENRE, genre};
}

export const toggleFavorites = () => {
    return {type: TOGGLE_FAVOURITES};
}

export const addComment = (userName, message) => {
    return {type: ADD_COMMENT, userName, message};
}

export const setGenres = (genres) => {
    return {type: SET_GENRES, genres};
}

export const setPicture = (picture) => {
    return {type: SET_PICTURE, picture};
}

export const setCountPicture = (countPicture) => {
    return {type: SET_COUNT_PICTURE, countPicture};
}

export const setActivePage = (countPage) => {
    return {type: SET_ACTIVE_PAGE, countPage};
}

export const setComments = (comments) => {
    return {type: SET_COMMENTS, comments}; // tyt getPicture
}

export const setGenresThunkCreator = () => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getGenres()
            dispatch(setGenres(response.items));
    }
}

export const setActivePictureThunkCreator = (idPicture) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getPicture(idPicture)
        dispatch(setActiveCinema(response.items));
    }
}

export const setPictureThunkCreator = (countPage, sizeOfPicture) => {
    return async (dispatch) => {
        dispatch(setActivePage(countPage))
        let response = await motionPictureAPI.getPictures(countPage, sizeOfPicture)
        dispatch(setPicture(response.items));
        dispatch(setCountPicture(response.totalCount));
    }
}

export const setPictureForGenreThunkCreator = (genre) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getPictureForGenre(genre)
        dispatch(setPicture(response.items));
    }
}

export const setCommentsForPictureThunkCreator = (picture) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getCommentsForPicture(picture)
        dispatch(setComments(response.items));
    }
}

// export const addCommentsForPictureThunkCreator = (message, idUser, idSinema) => { //comments
//     return async (dispatch) => {
//         let response = await motionPictureAPI.getCommentsForPicture(message, idUser, idSinema)
//         dispatch(setComments(response.items));
//     }
// }

let initMotionPicture = {
    motionData : [
        //{id: 1, name: 'Во все тяжкие1', path: 'pyt 1', poster: 'poster 1', country: 'США1', rating: '11', description: '123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия'], favourites: false},
        //{id: 2, name: 'Во все тяжкие1', path: 'pyt 1', poster: 'poster 1', country: 'США1', rating: '11', description: '123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия'], favourites: false}
    ],
    sizePicturePage : 2, // сколько кинокартин на странице
    totalPicture : 5,
    activePage: 1,
    countPicture: 1,
    activeCinema: {id: 1, name: 'Во все тяжкие1', path: 'pyt 1', poster: 'poster 1', country: 'США1', rating: '11', description: '123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия'], favourites: false},//this.motionData.length
    genre: [{name: 'Триллер'}],
    comments: []
}
//Eliot is in his happy place, unaware that he is being possessed by the
//                     Monster. To have control over his body, Eliot must travel to the place
//                     that contains his
let motionPictureReducer = (state = initMotionPicture, action) => {
    let stateClone = {...state};
    if (action.type === SET_ACTIVE_CINEMA) {
        stateClone.activeCinema = action.picture
    } else if (action.type === SET_ACTIVE_GENRE) {
        stateClone.activeGenre = action.genre;
    } else if (action.type === TOGGLE_FAVOURITES) {
        stateClone.motionData = [...stateClone.motionData]
        let id = stateClone.activeCinema.id - 1;
        stateClone.motionData[id].favourites = !stateClone.motionData[id].favourites;

        stateClone.activeCinema = {...stateClone.motionData[id]}
    } else if (action.type === ADD_COMMENT) {
        //comments
        stateClone.comments = [...state.comments]
        stateClone.comments.push({userName : action.userName, messages: action.message});
    } else if (action.type === SET_GENRES) {
        stateClone.genre = action.genres
    } else if (action.type === SET_PICTURE) {
        stateClone.motionData = [...state.motionData]
        stateClone.motionData = [...action.picture]
    } else if (action.type === SET_COUNT_PICTURE) {
        stateClone.totalPicture = action.countPicture
    } else if (action.type === SET_ACTIVE_PAGE) {
        stateClone.activePage = action.countPage
    } else if (action.type === SET_COMMENTS) {
        stateClone.comments = [...state.comments]
        stateClone.comments = action.comments
    }
    return stateClone;
}

export default motionPictureReducer;