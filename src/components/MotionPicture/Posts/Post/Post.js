import React from 'react';
import '../../../../style.scss';
import {NavLink} from "react-router-dom";

const Post = (props) => {
    return (
        <div className="postWrap">
            <h3>{props.name}</h3>
            <div className="genre">
                {props.tags.map((el) => {
                    return <NavLink to={`/motionPicture/${el}`} //active проставить
                                    onClick={() => props.setPictureForGenre(el)}>{el}</NavLink>
                })}

            </div>
            <div className="post">
                <img src={require('../../../../img/post-1.png')} alt="post"/>
                    <div className="description">
                        <p className="producer"><span>Режиссёр: </span>{props.producer}</p>
                        <p className="country"><span>Страна: </span>{props.country}</p>
                        <p className="years"><span>Год: </span>{props.years}</p>
                        <p className="descriptionText"><span>Описание: </span>{props.description}...
                        </p>
                        <div className="lookingWrap">
                            <NavLink to={`/picture/${props.pictureId}`} className="looking">Смотреть</NavLink>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Post;