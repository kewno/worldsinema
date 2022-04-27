import React from 'react';
import '../../style.scss';

const Header = () => {
    return (
        <footer>
            <p className="date">© 2022 <a href="/">WorldSinema</a>. Все права защищены.</p>
            <ul className="social">
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://vk.com/"><i className="fab fa-vk"></i></a>
            </ul>
            <p>Design by <a href="https://vk.com/id140406368">KeWNo</a>.</p>
        </footer>
    )
}

export default Header;