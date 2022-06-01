import * as axios from "axios";


const instanse = axios.create({
    baseURL : 'https://u129668.test-handyhost.ru/',
    //withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        //"API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    },
    withCredentials: true,
    cookie: {httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 48, sameSite: 'none'}
    //cookie : ('token', '123', { sameSite: 'None', secure: true })
    //SameSite: false
    //crossDomain: true
    //withCredentials: true
    // baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    // }
})

export let userAPI = {
    isAuth() {
        return instanse.get(`api.php?auth`)
            .then(response => response.data)
    },
    login(email, password) {
        return instanse.post(`api.php/registration`, {email, password})
    },
    // logout(id) {
    //     return instanse.delete(`api.php/logout`, {id})
    // },
    logout(id) {
        return instanse.get(`api.php?logout&id=${id}`)
    },
    registration(name, surname, dateRegistr, email, password, gender) {
        return instanse.post(`api.php/registration`, {name, surname, dateRegistr, email, password, gender})
    }
}

export let motionPictureAPI = {
    getPictures(countPage = 1, sizeUserOfPage = 2, typeCinemas = 1) {
        return instanse.get(`api.php?cinemas&page=${countPage}&count=${sizeUserOfPage}&type=${typeCinemas}`)
            .then(response => response.data)
    },
    getPicture(idPicture = 1, idUser) {
        //debugger
        return instanse.get(`api.php?cinema&idCinemas=${idPicture}&idUser=${idUser}`)
            .then(response => response.data)
    },
    getFavoritePicture(idUser) {
        //debugger
        return instanse.get(`api.php?favorites&id=${idUser}`)
            .then(response => response.data)
    },
    getPictureForGenre(genre) {
        //debugger
        return instanse.get(`api.php?genre&name=${genre}`)
            .then(response => response.data)
    },
    getGenres() {
        return instanse.get(`api.php?genres`)
            .then(response => response.data)
    },
    getCommentsForPicture(picture) {
        return instanse.get(`api.php?comments&idCinemas=${picture}`)
            .then(response => response.data)
    },
    postCommentsForPicture(id, comment, idUser) {
        return instanse.post(`api.php/comment`, {id, comment, idUser})
            .then(response => response.data)
    },
    postFavoriteForPicture(idCinema, idUser) { //$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1)); return instanse.post(`api.php/favorite/${idCinema}/${idUser}`)
        return instanse.post(`api.php/comment`, {idCinema, idUser})
            .then(response => response.data)
    },
    deleteFavoriteForPicture(idCinema, idUser) {
        return instanse.delete(`api.php/favorite/${idCinema}/${idUser}`)
    }
}