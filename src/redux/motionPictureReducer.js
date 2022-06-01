import {motionPictureAPI, userAPI} from "../api/api";

const SET_ACTIVE_CINEMA = 'SET_ACTIVE_CINEMA';
const SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE';
const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES';
const ADD_COMMENT = 'ADD_COMMENT';
const SET_GENRES = 'SET_GENRES';
const SET_PICTURE = 'SET_PICTURE';
const SET_COUNT_PICTURE = 'SET_COUNT_PICTURE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_COMMENTS = 'SET_COMMENTS';
const SET_AUTH = 'SET_AUTH';
const DELL_AUTH = 'DELL_AUTH';
const SET_ERROR = 'SET_ERROR';

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

export const setAuth = (auth) => {
    return {type: SET_AUTH, auth};
}
export const dellAuth = (auth) => {
    return {type: DELL_AUTH, auth};
}
export const setError = (error) => {
    return {type: SET_ERROR, error};
}

export const setGenresThunkCreator = () => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getGenres()
            dispatch(setGenres(response.items));
    }
}

export const setActivePictureThunkCreator = (idPicture, idUser) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getPicture(idPicture, idUser)
        //debu
        dispatch(setActiveCinema(response.items));
    }
}

export const setPictureThunkCreator = (countPage, sizeOfPicture, typeCinemas) => {
    return async (dispatch) => {
        dispatch(setActivePage(countPage))
        let response = await motionPictureAPI.getPictures(countPage, sizeOfPicture, typeCinemas)
        //debugger
        dispatch(setPicture(response.items));
        dispatch(setCountPicture(response.totalCount));
    }
}

export const setPictureForGenreThunkCreator = (genre) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getPictureForGenre(genre)
        //debugger
        dispatch(setPicture(response.items));
    }
}

export const setCommentsForPictureThunkCreator = (picture) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getCommentsForPicture(picture)
        //debugger
        dispatch(setComments(response.items));
    }
}

export const setCommentThunkCreator = (id, comment, idUser) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.postCommentsForPicture(id, comment, idUser)
        debugger
        dispatch(setComments(response.items));
    }
}
export const setFavoriteThunkCreator = (idCinema, idUser) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.postFavoriteForPicture(idCinema, idUser)
        //debugger
        dispatch(toggleFavorites());
    }
}
export const deleteFavoriteThunkCreator = (idCinema, idUser) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.deleteFavoriteForPicture(idCinema, idUser)
        //debugger
        dispatch(toggleFavorites());
    }
}

export const isAuthThunkCreator = () => {
    return async (dispatch) => {
        let response = await userAPI.isAuth()
        if (response.items != 'Не авторизован') {
            dispatch(setAuth(response.items))
        }
    }
}

export const dellAuthThunkCreator = () => {
    return async (dispatch) => {
        let response = await userAPI.logout(1)
        debugger
        dispatch(dellAuth()); 
    }
}

export const registrationThunkCreator = (data) => {
    return async (dispatch) => {
        let response = await userAPI.registration(data.name, data.surname, '2022-06-05', data.login, data.password, data.gender)
        //debugger
        if (response.data.items == "Данный email уже используется") {
            dispatch(setError("Данный email уже используется"))
        } else if (response.data.items == "Зарегистрирован") {
            dispatch(setError("Зарегистрирован"))
        }
        
    }
}

export const loginThunkCreator = (data) => { //login(email, password)
    return async (dispatch) => {
        let response = await userAPI.login(data.login, data.password)
        debugger
        if (response.data.items == "Авторизован") {
            dispatch(isAuthThunkCreator())
        } else {
            dispatch(setError(response.data.items))
        }
    }
}

// export const addCommentsForPictureThunkCreator = (message, idUser, idSinema) => { //comments
//     return async (dispatch) => { postFavoriteForPicture(idCinema, idUser)
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
    comments: [],
    auth: {},
    errors: {}
}

let motionPictureReducer = (state = initMotionPicture, action) => {
    let stateClone = {...state};
    if (action.type === SET_ACTIVE_CINEMA) {
        stateClone.activeCinema = action.picture
    } else if (action.type === SET_ACTIVE_GENRE) {
        stateClone.activeGenre = action.genre;
    } else if (action.type === TOGGLE_FAVOURITES) {
        stateClone.motionData = [...stateClone.motionData]
        let id = stateClone.activeCinema.id - 1;
        //debugger
        stateClone.activeCinema = {...stateClone.activeCinema}
        if (stateClone.activeCinema.favorites == '0') stateClone.activeCinema.favorites = false
        if (stateClone.activeCinema.favorites == '1') stateClone.activeCinema.favorites = true
        stateClone.activeCinema.favorites = !stateClone.activeCinema.favorites;
    } else if (action.type === ADD_COMMENT) {
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
    } else if (action.type === SET_AUTH) {
        stateClone.auth = {...state.auth}
        if (action.auth) stateClone.auth = action.auth
            else  stateClone.auth = {} 
    } else if (action.type === DELL_AUTH) {
        stateClone.auth = {}
    } else if (action.type === SET_ERROR) {
        stateClone.errors = {...stateClone.errors}
        stateClone.errors.auth = action.error
    }
    return stateClone;
}

export default motionPictureReducer;