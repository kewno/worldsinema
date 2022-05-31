import React from 'react';
import '../../../style.scss';
import { dellAuthThunkCreator } from '../../../redux/motionPictureReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const HeaderUserData = () => {
    let dispatch = useDispatch()
    let user = useSelector(state => state.motionPicture.auth)
    //debugger
    let image = 'https://u129668.test-handyhost.ru/avatar/avatar.png'
    if (user.avatar) {
        image = `https://u129668.test-handyhost.ru/avatar/${user.avatar}`
    }
    //<Navigate to={`/signIn`}/>
    return (
    <div className="userData">
        <div className="wrapText">
            <h3 className="name">{user.name ? user.name : 'Аноним'}</h3>
            {user.id ?
            <p className="logOut" onClick={() => dispatch(dellAuthThunkCreator())}>Выйти</p>
            :
            <p className="logOut"><NavLink to='/signIn'>Войти</NavLink></p>}
        </div>
        <img className="avatar" src={`${image}`} alt="avatar"/>
    </div>
    )
}

export default HeaderUserData;