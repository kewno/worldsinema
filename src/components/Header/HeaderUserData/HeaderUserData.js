import React from 'react';
import '../../../style.scss';
import { dellAuthThunkCreator } from '../../../redux/motionPictureReducer';
import { useDispatch } from 'react-redux';

const HeaderUserData = () => {
    let dispatch = useDispatch()
    return (
        <div className="userData">
            <div className="wrapText">
                <h3 className="name">Андрей</h3>
                <p className="logOut" onClick={() => dispatch(dellAuthThunkCreator())}>Выйти</p>
                {/*<NavLink to='/aboutUs' className="link">О нас</NavLink>*/}
            </div>
            <img className="avatar" src={require('../../../img/avatar.png')} alt="avatar"/>
        </div>
    )
}

export default HeaderUserData;