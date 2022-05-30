import React from 'react';
import '../../../../style.scss';
import Rating from "./Rating/Rating";
import Tags from "./Tags/Tags";

const Video = (props) => {
    //video/larin.mp4
    return (
        <div className="video">
            <Tags
                tags={props.tags}
                favourites={props.favourites}
                toggleFavorites={props.toggleFavorites}
                setPictureForGenre={props.setPictureForGenre}
            />
            {/* <video width="320" height="240" controls>
                <source src={require('../../../../video/BoulevardDepo.mp4')} type="video/mp4"/>{'https://www.youtube.com/watch?v=1iZN0XzthJI'}
                <source src={require('../../../../video/BoulevardDepo.mp4')} type="video/ogg"/>
                Your browser does not support the video tag.
            </video> */}
            {/* <video
                loop
                controls
                crossOrigin='true'
                playsInline
                poster="https://static.sobaka.ru/images/post/00/07/28/30/_rotator.jpg?v=1526045497"
                id="player"
            >
                <source
                    src={require('../../../../video/BoulevardDepo.mp4')}
                    type="video/mp4"
                    size="576"
                />
            </video> */}
            <iframe className='videoPlayer' src="https://www.youtube.com/embed/BbtB0tyvRbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            {/* <iframe className='videoPlayer' allowfullscreen
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            <video width="320" height="240" controls>
                <source src={require('../../../../video/BoulevardDepo.mp4')} type="video/mp4"/>{'https://www.youtube.com/watch?v=1iZN0XzthJI'}
                <source src={require('../../../../video/BoulevardDepo.mp4')} type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
            <video
                loop
                controls
                crossOrigin='true'
                playsInline
                poster="https://static.sobaka.ru/images/post/00/07/28/30/_rotator.jpg?v=1526045497"
                id="player"
            >
                <source
                    src={require('../../../../video/BoulevardDepo.mp4')}
                    type="video/mp4"
                    size="576"
                />
            </video>
            </iframe> */}
            <Rating rating={props.rating}/>
        </div>
    )
}

export default Video;