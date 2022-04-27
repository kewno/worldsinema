import React from 'react';
import '../../style.scss';
import FooterSocial from "./FooterSocial/FooterSocial";

const Footer = () => {
    return (
        <footer>
            <p className="date">© 2022 <a href="/">WorldSinema</a>. Все права защищены.</p>
            <FooterSocial/>
            <p>Design by <a href="https://vk.com/id140406368">KeWNo</a>.</p>
        </footer>
    )
}

export default Footer;