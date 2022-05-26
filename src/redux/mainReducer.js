import {motionPictureAPI, userAPI} from "../api/api";

const SET_ACTIVE_CINEMA = 'SET_ACTIVE_CINEMA';
const SET_FAVORITE_PICTURE = 'SET_FAVORITE_PICTURE';

export const setActiveCinema = (id) => {
    return {type: SET_ACTIVE_CINEMA, id};
}

export const setPicture = (picture) => {
    return {type: SET_FAVORITE_PICTURE, picture};
} 

export const setFaviritePictureThunkCreator = (idUser) => {
    return async (dispatch) => {
        let response = await motionPictureAPI.getFavoritePicture(idUser)
        dispatch(setPicture(response.items));
    }
}

export const registrationThunkCreator = (name, surname, dateRegistr, email, password, gender) => { //'имя', 'фамилия', '2022-03-20', 'mail@mail.ru', '123', 1
    return async (dispatch) => {
        let response = await userAPI.registration(name, surname, dateRegistr, email, password, gender)
        debugger
    }
}

let initMain = {
    favoriteMotionData : [
        // {id: 1, name: 'Во все тяжкие1', poster: 'poster-5.png'},
        // {id: 2, name: 'Мир дикого запада', poster: 'poster-1.png'},
        // {id: 3, name: 'Во все тяжкие3', poster: 'poster-3.png'},
        // {id: 4, name: 'Во все тяжкие4', poster: 'poster-4.png'}
    ]
}

let mainReducer = (state = initMain, action) => {
    let stateClone = {...state};
    if (action.type === SET_ACTIVE_CINEMA) {
        // let active = stateClone.motionData.filter(el => {
        //     if (el.id === action.id) {
        //         return el;
        //     }
        // })
        // stateClone.activeCinema = active[0];
    } else if (action.type === SET_FAVORITE_PICTURE) {
        stateClone.favoriteMotionData = [...state.favoriteMotionData]
        
        stateClone.favoriteMotionData = [...action.picture]
    }
    return stateClone;
}

export default mainReducer;