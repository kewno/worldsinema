import React from 'react';
import '../../../../../style.scss';

const Tags = (props) => {
    //debugger
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

            {props.favourites ? <img onClick={props.toggleFavorites} src={require('../../../../../img/starA.png')} alt="" id="star-5"/> : <img onClick={props.toggleFavorites} src={require('../../../../../img/star.png')} alt="" id="star-5"/>}
            {/*<img src={require('../../../../../img/star.png')} alt="" id="star-5"/>*/}
        </div>
    )
}

export default Tags;