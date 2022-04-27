import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";

const HeaderUserData = () => {
    return (
        <div className="userData">
            <div className="wrapText">
                <h3 className="name">Андрей</h3>
                <a href="/script/logout.php" className="logOut">Выйти</a>
                {/*<NavLink to='/aboutUs' className="link">О нас</NavLink>*/}
            </div>
            <img className="avatar" src={require('../../../img/avatar.png')} alt="avatar"/>
        </div>
    )
}

export default HeaderUserData;