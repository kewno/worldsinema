import React from 'react';
import { useSelector } from 'react-redux';
import '../../../../style.scss';
import AddCommentForm from "../AddCommentForm/AddCommentForm";

const AddComments = (props) => {
    let user = useSelector(state => state.motionPicture.auth)
    let image = 'https://u129668.test-handyhost.ru/avatar/avatar.png'
    if (user.avatar) {
        image = `https://u129668.test-handyhost.ru/avatar/${user.avatar}`
    }
    return (
        <div className="postComment">
            <img src={`${image}`} alt=""/>
            <div className="wrapSubmit">
                <AddCommentForm addComment={props.addComment}/>

                {/*<textarea id=""/>*/}
                {/*<a href="">Отправить</a>*/}
            </div>
        </div>
    )
}

export default AddComments;