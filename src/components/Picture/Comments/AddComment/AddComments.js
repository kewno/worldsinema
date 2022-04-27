import React from 'react';
import '../../../style.scss';

const Comments = () => {
    return (
            <div className="commentsWrap">
                <h3>Комментарии</h3>
                <div className="postComment">
                    <img src="img/avatar.png" alt=""/>
                    <div className="wrapSubmit">
                        <textarea id=""/>
                        <a href="">Отправить</a>
                    </div>
                </div>
                <div className="allComments">
                    <div className="comment">
                        <img className="" src="img/avatar.png" alt=""/>
                        <div className="wrapText">
                            <h4>Имя Фамилия</h4>
                            <p>Eliot is in his happy place, unaware that he is being possessed by the
                                Monster. To have control over his body, Eliot must travel to the place
                                that contains his
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Comments;