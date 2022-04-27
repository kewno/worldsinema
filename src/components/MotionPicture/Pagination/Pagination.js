import React from 'react';
import '../../style.scss';

const MotionPicture = () => {
    return (
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
                <div className="posts">
                    <div className="postWrap">
                        <h3>Во все тяжкие</h3>
                        <div className="genre">
                            <a href="/">Криминальная драма</a>
                            <a href="/">Триллер</a>
                            <a href="/">Современный вестерн</a>
                            <a href="/">Черная комедия</a>
                        </div>
                        <div className="post">
                            <img src="img/post-1.png" alt="post"/>
                                <div className="description">
                                    <p className="producer"><span>Режиссёр:</span> Винс Гиллиган</p>
                                    <p className="country"><span>Страна:</span> США</p>
                                    <p className="years"><span>Год:</span> 2008-2013</p>
                                    <p className="descriptionText"><span>Описание:</span> Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias
                                        veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse
                                        quidem iure blanditiis illum...
                                    </p>
                                    <div className="lookingWrap">
                                        <a href="" className="looking">Смотреть</a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="postWrap">
                        <h3>Во все тяжкие</h3>
                        <div className="genre">
                            <a href="/">Криминальная драма</a>
                            <a href="/">Триллер</a>
                            <a href="/">Современный вестерн</a>
                            <a href="/">Черная комедия</a>
                        </div>
                        <div className="post">
                            <img src="img/post-1.png" alt="post"/>
                                <div className="description">
                                    <p className="producer"><span>Режиссёр:</span> Винс Гиллиган</p>
                                    <p className="country"><span>Страна:</span> США</p>
                                    <p className="years"><span>Год:</span> 2008-2013</p>
                                    <p className="descriptionText"><span>Описание:</span> Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Asperiores ducimus sequi deserunt. Molestias
                                        veniam, cupiditate placeat explicabo quisquam voluptas et culpa, repellat esse
                                        quidem iure blanditiis illum...
                                    </p>
                                    <div className="lookingWrap">
                                        <a href="" className="looking">Смотреть</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <nav className="pagination">
                    <ul>
                        <li><a href="#" id="prevTabPagination">&#60;</a></li>
                        <li><a href="#" className="active">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><a href="#" id="nextTabPagination">&#62;</a></li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

export default MotionPicture;