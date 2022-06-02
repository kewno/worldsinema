import React from 'react';
import '../../../style.scss';

const HeaderTitle = () => {
    return (
        <h1>
            <a className="mainPage" href="/">
                <img src={`https://u129668.test-handyhost.ru/img/logo.png`} className="logo" alt="logo"/>
            </a>
        </h1>
    )
}

export default HeaderTitle;