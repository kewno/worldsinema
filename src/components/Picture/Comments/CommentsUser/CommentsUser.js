import React from 'react';
import '../../../../style.scss';
import CommentUser from "./CommentUser/CommentUser";

const CommentsUser = (props) => {
    debugger
    return (
        <div className="allComments">
            {props.comments.map(el => {
                return <CommentUser name={el.userName} text={el.messages} avatar={el.avatar}/>
            })}
        </div>
    )
}

export default CommentsUser;