import React from 'react';
import '../../../style.scss';
import Description from "./Description/Description";
import Video from "./Video/Video";

const VideoWrap = (props) => {
    return (
        <div className="videoWrap">
            <Video tags={props.tags}
                   rating={props.rating}
                   favourites={props.favourites}
                   toggleFavorites={props.toggleFavorites}
                   setPictureForGenre={props.setPictureForGenre}
                   path={props.path}
            />
            <Description description={props.description}/>
        </div>
    )
}

export default VideoWrap;