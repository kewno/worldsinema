import React from 'react';
//import { NavLink } from 'react-router-dom';
import '../../../../../style.scss';
import {Navigate, useNavigate} from 'react-router-dom';

const Post = (props) => {
    const navigate = useNavigate()
    let handleClick = (id) => {
        navigate(`/picture/${id}`)
    }
    return (
        
        <div className="post">
            <img onClick={() => handleClick(props.id)} src={require(`../../../../../img/${props.poster}`)} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

export default Post;