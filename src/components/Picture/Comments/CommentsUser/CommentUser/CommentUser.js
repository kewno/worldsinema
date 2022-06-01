import React from 'react';
import '../../../../../style.scss';

const CommentUser = (props) => { //avatar
    return (
        <div className="comment">
            <img className="" src={`https://u129668.test-handyhost.ru/avatar/${props.avatar}`} alt=""/>
            <div className="wrapText">
                <h4>{props.name}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default CommentUser;