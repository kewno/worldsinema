import React from 'react';
import '../../style.scss';
import Pagination from "./Pagination/Pagination";
import Posts from "./Posts/Posts";

const MotionPicture = () => {
    return (
        // <Header />
        <main>
            <aside>
                <h3>Жанры</h3>
                <nav className="genre">
                    <ul>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                    </ul>
                </nav>
            </aside>
            <aside className="asideBurger">
                <h3>Жанры</h3>
                <nav className="genre">
                    <ul>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                        <li><a href="">Черная комедия</a></li>
                    </ul>
                </nav>
                <img src="img/arrowR.png" className="arrow" id="arrow" alt=""/>
            </aside>
            <div className="content">
                <Posts/>
                <Pagination/>
            </div>
        </main>
        // <Footer />
    )
}

export default MotionPicture;