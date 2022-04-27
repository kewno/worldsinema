import React from 'react';
import '../../style.scss';
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderUserData from "./HeaderUserData/HeaderUserData";

const Header = () => {
    return (
        <header>
            <HeaderTitle/>
            <HeaderMenu/>
            <HeaderUserData/>
        </header>
    )
}

export default Header;