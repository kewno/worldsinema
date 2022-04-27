import * as axios from "axios";


const instanse = axios.create({
    baseURL : 'http://a0661952.xsph.ru/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
    // baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    // }
})


export let motionPictureAPI = {
    getPictures(countPage = 1, sizeUserOfPage = 2) {
        return instanse.get(`android.php?cinemas&page=${countPage}&count=${sizeUserOfPage}`)
            .then(response => response.data)
    },
    getPicture(idPicture = 1) {
        return instanse.get(`android.php?cinema&idCinemas=${idPicture}`)
            .then(response => response.data)
    },
    getFavoritePicture(idUser = 1) {
        return instanse.get(`android.php?favorite&id=${idUser}`)
            .then(response => response.data)
    },
    getPictureForGenre(genre) {
        return instanse.get(`android.php?genre&name=${genre}`)
            .then(response => response.data)
    },
    getGenres() {
        return instanse.get(`android.php?genres`) //instanse.get(`users?page=1&count=5`)
            .then(response => response.data)
    },
    getCommentsForPicture(picture) {
        return instanse.get(`android.php?comments&idCinemas=${picture}`) //instanse.get(`users?page=1&count=5`)
            .then(response => response.data)
    }
    // unsubscribeUser(userId) {
    //     return instanse.delete(`follow/${userId}`)
    //         .then(response => response.data)
    // }
}