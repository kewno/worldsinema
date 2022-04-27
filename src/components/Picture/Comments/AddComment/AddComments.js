import React from 'react';
import '../../../../style.scss';
import AddCommentForm from "../AddCommentForm/AddCommentForm";

const AddComments = (props) => {
    return (
        <div className="postComment">
            <img src={require('../../../../img/avatar.png')} alt=""/>
            <div className="wrapSubmit">
                <AddCommentForm addComment={props.addComment}/>

                {/*<textarea id=""/>*/}
                {/*<a href="">Отправить</a>*/}
            </div>
        </div>
    )
}

export default AddComments;