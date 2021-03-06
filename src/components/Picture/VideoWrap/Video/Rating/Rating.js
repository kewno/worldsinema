import React from 'react';
import '../../../../../style.scss';

const Rating = (props) => {
    return (
        <div className="ratings">
            <div className="stars">
                <img src={`https://u129668.test-handyhost.ru/img/star.png`} alt="" id="star-1"/>
                <img src={`https://u129668.test-handyhost.ru/img/star.png`} alt="" id="star-2"/>
                <img src={`https://u129668.test-handyhost.ru/img/star.png`} alt="" id="star-3"/>
                <img src={`https://u129668.test-handyhost.ru/img/star.png`} alt="" id="star-4"/>
                <img src={`https://u129668.test-handyhost.ru/img/star.png`} alt="" id="star-5"/>
                <p><span>0 / 10</span></p>
            </div>
            <p>Рейтинг <span>{props.rating} / 10</span></p>
        </div>
    )
}

export default Rating;