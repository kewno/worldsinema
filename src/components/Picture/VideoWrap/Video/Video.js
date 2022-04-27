import React from 'react';
import '../../../../style.scss';
import Rating from "./Rating/Rating";
import Tags from "./Tags/Tags";

const Video = (props) => {
    return (
        <div className="video">
            <Tags
                tags={props.tags}
                favourites={props.favourites}
                toggleFavorites={props.toggleFavorites}
                setPictureForGenre={props.setPictureForGenre}
            />
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
            <Rating rating={props.rating}/>
        </div>
    )
}

export default Video;