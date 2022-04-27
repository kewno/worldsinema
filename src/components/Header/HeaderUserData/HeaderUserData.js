import React from 'react';
import '../../style.scss';

const Header = () => {
    return (
        <header>
            <h1>
                <a className="mainPage" href="/">
                    <img src="img/logo.png" className="logo" alt="logo"/>
                </a>
            </h1>
            <nav className="menu">
                <ul>
                    <li><a href="motion-pictures.php">Фильмы</a></li>
                    <li><a href="motion-pictures.php">Сериалы</a></li>
                    <li><a href="aboutUs.html">О нас</a></li>
                </ul>
            </nav>
            <div className="userData">
                <div className="wrapText">
                    <h3 className="name">Андрей</h3>
                    <a href="/script/logout.php" className="logOut">Выйти</a>
                </div>
                <img className="avatar" src="img/avatar.png" alt="avatar"/>
            </div>
        </header>
    )
}

export default Header;