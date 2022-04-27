import React from 'react';
import '../../../../style.scss';
import CommentUser from "./CommentUser/CommentUser";

const CommentsUser = (props) => {
    return (
        <div className="allComments">
            {props.comments.map(el => {
                return <CommentUser name={el.userName} text={el.messages}/>
            })}
            {/*<CommentUser/>*/}
            {/*<CommentUser/>*/}
            {/*<CommentUser/>*/}
        </div>
    )
}

export default CommentsUser;