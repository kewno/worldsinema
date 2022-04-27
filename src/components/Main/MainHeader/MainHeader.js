import React from 'react';
import '../../style.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className="main">
            <Header/>
            <main>
                <div className="content">
                    <div className="header">
                        <h2>Бумажный дом</h2>
                        <a href="">Смотреть</a>
                    </div>

                    <div className="wrapSlider">
                        <h3>Избранное</h3>
                        <div className="postsWrap">
                            <div className="posts">
                                <div className="post">
                                    <img src="img/poster-1.png" alt=""/>
                                    <p>Мир дикого запада</p>
                                </div>
                                <div className="post">
                                    <img src="img/poster-3.png" alt=""/>
                                    <p>Мир дикого запада</p>
                                </div>
                                <div className="post">
                                    <img src="img/poster-1.png" alt=""/>
                                    <p>Мир дикого запада</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;