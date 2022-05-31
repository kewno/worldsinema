import React from 'react';
import '../../../style.scss';
import Posts from "./Posts/Posts";

const MainSlider = ({idUser, ...props}) => {
    let text = 'Избранное'
    if (idUser == 0) {
        text = 'Новинки'
    }
    return (
        <div className="wrapSlider">
            <h3>{text}</h3>
            <Posts dataPicture={props.dataPicture}/>
        </div>
    )
}

export default MainSlider;