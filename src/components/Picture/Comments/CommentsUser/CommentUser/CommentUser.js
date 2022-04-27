import React from 'react';
import '../../../../../style.scss';

const CommentUser = (props) => {
    return (
        <div className="comment">
            <img className="" src={require('../../../../../img/avatar.png')} alt=""/>
            <div className="wrapText">
                <h4>{props.name}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default CommentUser;