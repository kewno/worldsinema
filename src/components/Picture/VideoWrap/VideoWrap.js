import React from 'react';
import '../../style.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Comments from "./Comments/Comments";
import Frames from "./Frames/Frames";

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

                        <Frames/>

                        <Comments/>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Picture;