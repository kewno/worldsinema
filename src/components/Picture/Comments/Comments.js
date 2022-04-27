import React from 'react';
import '../../../style.scss';
import AddComments from "./AddComment/AddComments";
import CommentsUser from "./CommentsUser/CommentsUser";

const Comments = (props) => {
    return (
            <div className="commentsWrap">
                <h3>Комментарии</h3>
                <AddComments addComment={props.addComment}/>
                <CommentsUser comments={props.comments}/>
            </div>
    )
}

export default Comments;