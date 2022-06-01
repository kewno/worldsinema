import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to='/motionPicture/1' className="link">Фильмы</NavLink></li>
                <li><NavLink to='/motionPicture/2' className="link">Сериалы</NavLink></li>
                <li><NavLink to='/aboutUs' className="link">О нас</NavLink></li>
            </ul>
        </nav>
    )
}

export default HeaderMenu;