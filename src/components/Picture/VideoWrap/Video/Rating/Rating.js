import React from 'react';
import '../../../../style.scss';

const Video = () => {
    return (
        <div className="video">
            <div className="wrapTags">
                <div className="tags">
                    <a href="">Комедия</a>
                    <a href="">Боевик</a>
                    <a href="">Еще что-то</a>
                    <a href="">Комедия</a>
                    <a href="">Боевик</a>
                </div>
                <img src="img/star.png" alt="" id="star-5"/>
            </div>
            <video
                controls
                crossOrigin
                playsInline
                data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                id="player"
            >
                <source
                    src="video/larin.mp4"
                    type="video/mp4"
                    size="576"
                />
            </video>
            <div className="ratings">
                <div className="stars">
                    <img src="img/star.png" alt="" id="star-1"/>
                    <img src="img/star.png" alt="" id="star-2"/>
                    <img src="img/star.png" alt="" id="star-3"/>
                    <img src="img/star.png" alt="" id="star-4"/>
                    <img src="img/star.png" alt="" id="star-5"/>
                    <p><span>0 / 10</span></p>
                </div>
                <p>Рейтинг <span>9,9 / 10</span></p>
            </div>
        </div>
    )
}

export default Video;