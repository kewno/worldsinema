const SET_ACTIVE_CINEMA = 'SET_ACTIVE_CINEMA';

export const setActiveCinema = (id) => {
    return {type: SET_ACTIVE_CINEMA, id}; // tyt
}

let initMotionPicture = {
    motionData : [
        {id: 1, name: 'Во все тяжкие1', path: 'pyt 1', poster: 'poster 1', country: 'США1', rating: '11', description: '123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия']},
        {id: 2, name: 'Во все тяжкие2', path: 'pyt 2', poster: 'poster 1', country: 'США2', rating: '12', description: '223 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Современный вестерн', 'Черная комедия']},
        {id: 3, name: 'Во все тяжкие3', path: 'pyt 3', poster: 'poster 1', country: 'США3', rating: '13', description: '323 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Триллер', 'Черная комедия']},
        {id: 4, name: 'Во все тяжкие4', path: 'pyt 4', poster: 'poster 1', country: 'США4', rating: '14', description: '423 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Триллер']},
        {id: 5, name: 'Во все тяжкие5', path: 'pyt 5', poster: 'poster 1', country: 'США5', rating: '15', description: '523 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия']},
        {id: 6, name: 'Во все тяжкие6', path: 'pyt 1', poster: 'poster 1', country: 'США1', rating: '11', description: '123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Триллер', 'Черная комедия']},
        {id: 7, name: 'Во все тяжкие7', path: 'pyt 2', poster: 'poster 1', country: 'США2', rating: '12', description: '223 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Современный вестерн', 'Черная комедия']},
        {id: 8, name: 'Во все тяжкие8', path: 'pyt 3', poster: 'poster 1', country: 'США3', rating: '13', description: '323 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Черная комедия']},
        {id: 9, name: 'Во все тяжкие9', path: 'pyt 4', poster: 'poster 1', country: 'США4', rating: '14', description: '423 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Современный вестерн', 'Черная комедия']},
        {id: 10, name: 'Во все тяжкие10', path: 'pyt 5', poster: 'poster 1', country: 'США5', rating: '15', description: '523 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse quidem iure blanditiis', years: '2007-2016', producer: 'Винс гиллиган', tags : ['Криминальная драма', 'Триллер']}
    ],
    sizePicturePage : 2, // сколько кинокартин на странице
    //sizeVisiblePagePaginator : 4,
    activePage: 1,
    countPicture: 1,
    activeCinema: null,//this.motionData.length
    genre: ['Комедия', 'Триллер']
}

let motionPictureReducer = (state = initMotionPicture, action) => {
    let stateClone = {...state};
    if (action.type === SET_ACTIVE_CINEMA) {
        let active = stateClone.motionData.filter(el => {
            if (el.id === action.id) {
                return el;
            }
        })
        stateClone.activeCinema = active[0];
    }
    return stateClone;
}

export default motionPictureReducer;