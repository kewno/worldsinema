import React from 'react';
import '../../style.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Picture = () => {
    return (
        <div className="containerPicture">
            <Header />
            <main>
                <div className="content">
                    <div className="picture">
                        <h2 className="name">Криминальное чтиво</h2>

                        <div className="videoWrap">
                            <div className="video">
                                <div className="wrapTags">
                                    <div className="tags">
                                        <a href="">Комедия</a>
                                        <a href="">Боевик</a>
                                        <a href="">Еще что-то</a>
                                        <a href="">Комедия</a>
                                        <a href="">Боевик</a>
                                    </div>
                                    <img src="img/star.png" alt="" id="star-5"/>
                                </div>
                                <video
                                    controls
                                    crossOrigin
                                    playsInline
                                    data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                    id="player"
                                >
                                    <source
                                        src="video/larin.mp4"
                                        type="video/mp4"
                                        size="576"
                                    />
                                </video>
                                <div className="ratings">
                                    <div className="stars">
                                        <img src="img/star.png" alt="" id="star-1"/>
                                        <img src="img/star.png" alt="" id="star-2"/>
                                        <img src="img/star.png" alt="" id="star-3"/>
                                        <img src="img/star.png" alt="" id="star-4"/>
                                        <img src="img/star.png" alt="" id="star-5"/>
                                        <p><span>0 / 10</span></p>
                                    </div>
                                    <p>Рейтинг <span>9,9 / 10</span></p>
                                </div>
                            </div>
                            <div className="description">
                                <h3>Описание</h3>
                                <p>Eliot is in his happy place, unaware that he is being possessed by the Monster. To
                                    have control over his body, Eliot must travel to the place that contains his
                                    greatest regret: turning down Quentin when he suggests he and Eliot should be
                                    together after their memories are restored of their life in past-Fillory, happily
                                    living together and raising a family.</p>
                            </div>
                        </div>

                        <div className="wrapFrames">
                            <h3 className="frameName">Кадры</h3>

                            <div className="frameWrap">
                                <div className="frames">
                                    <div className="frame">
                                        <img src="img/cadr-1.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-2.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                    <div className="frame">
                                        <img src="img/cadr-3.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="commentsWrap">
                            <h3>Комментарии</h3>
                            <div className="postComment">
                                <img src="img/avatar.png" alt=""/>
                                <div className="wrapSubmit">
                                    <textarea id=""/>
                                    <a href="">Отправить</a>
                                </div>
                            </div>
                            <div className="allComments">
                                <div className="comment">
                                    <img className="" src="img/avatar.png" alt=""/>
                                    <div className="wrapText">
                                        <h4>Имя Фамилия</h4>
                                        <p>Eliot is in his happy place, unaware that he is being possessed by the
                                            Monster. To have control over his body, Eliot must travel to the place
                                            that contains his
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Picture;