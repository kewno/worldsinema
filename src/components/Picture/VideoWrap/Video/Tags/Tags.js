import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoriteThunkCreator, setFavoriteThunkCreator } from '../../../../../redux/motionPictureReducer';
import '../../../../../style.scss';

const Tags = (props) => {
    let favorite = useSelector(state => state.motionPicture.activeCinema.favorites)
    let id = useSelector(state => state.motionPicture.activeCinema.id)
    //debugger
    let dispatch = useDispatch()
    let i = 0
    return (
        <div className="wrapTags">
            <div className="tags">
                {props.tags.map(el => {
                    return <a key={i++} onClick={() => { 
                        props.setPictureForGenre(el)
                        //<Redirect to="/somewhere/else" />
                    }}>{el}</a>
                })}
            </div>
                
            {favorite != 0 && favorite ? <img onClick={() => {
                dispatch(deleteFavoriteThunkCreator(id, 1))
                //return props.toggleFavorites()
            }} src={require('../../../../../img/starA.png')} alt="" id="star-5"/> : <img onClick={() => {
                dispatch(setFavoriteThunkCreator(id, 1))
                //return props.toggleFavorites()
            }} src={require('../../../../../img/star.png')} alt="" id="star-5"/>}
            {/*<img src={require('../../../../../img/star.png')} alt="" id="star-5"/>*/}
        </div>
    )
}

export default Tags;