import React from 'react';
import '../../../../style.scss';
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className="postsWrap">
            <div className="posts">
                {props.dataPicture.map(el => {
                    return <Post key={el.id} id={el.id} name={el.name} poster={el.poster || 'poster-1.png'}/> //name={el.name} poster={el.poster}
                })}
            </div>
        </div>
    )
}

export default Posts;