import React from 'react';
import '../../../../../style.scss';

const Post = (props) => {
     // () => {props.openPicture()}
    let openPicture = (id) => {
        // <NavLink to={`/picture/${id}`}></NavLink>
    }
    return (
        
        <div className="post" onClick={() => {openPicture(props.id)}}>
            <img src={require(`../../../../../img/${props.poster}`)} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

export default Post;