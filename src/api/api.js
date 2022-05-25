import * as axios from "axios";


const instanse = axios.create({
    baseURL : 'http://a0677263.xsph.ru/',
    //withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }//,
    //withCredentials: true
    // baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    // }
})

export let userAPI = {
    isAuth() {
        return instanse.get(`auth/me`)
    },
    login(email, password) {
        return instanse.post(`api.php?auth/login`, {email, password, rememberMe: true})
    },
    logout() {
        return instanse.delete(`api.php?auth/login`)
    },
    registration(name, surname, dateRegistr, email, password, gender) {
        return instanse.post(`api.php/registration`, {name, surname, dateRegistr, email, password, gender})
    }
}

export let motionPictureAPI = {
    getPictures(countPage = 1, sizeUserOfPage = 2) {
        return instanse.get(`api.php?cinemas&page=${countPage}&count=${sizeUserOfPage}`)
            .then(response => response.data)
    },
    getPicture(idPicture = 1) {
        return instanse.get(`api.php?cinema&idCinemas=${idPicture}`)
            .then(response => response.data)
    },
    getFavoritePicture(idUser = 1) {
        return instanse.get(`api.php?favorites&id=${idUser}`)
            .then(response => response.data)
    },
    getPictureForGenre(genre) {
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
    }
}