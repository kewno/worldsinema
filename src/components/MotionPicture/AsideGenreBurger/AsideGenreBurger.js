import React from 'react';
import '../../../style.scss';

const AsideGenreBurger = (props) => {
    return (
            <aside className="asideBurger">
                <h3>Жанры</h3>
                <nav className="genre">
                    <ul>
                        {props.genre.map(el => {
                            return <li><a href="">{el}</a></li>
                        })}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                        {/*<li><a href="">Черная комедия</a></li>*/}
                    </ul>
                </nav>
                <img src="img/arrowR.png" className="arrow" id="arrow" alt=""/>
            </aside>
    )
}

export default AsideGenreBurger;