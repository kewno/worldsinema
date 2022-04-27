import React from 'react';
import '../../../style.scss';
import Posts from "./Posts/Posts";

const MainSlider = (props) => {
    return (
        <div className="wrapSlider">
            <h3>Избранное</h3>
            <Posts dataPicture={props.dataPicture}/>
        </div>
    )
}

export default MainSlider;