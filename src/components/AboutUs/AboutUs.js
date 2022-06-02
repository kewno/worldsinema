import React from 'react';
import '../../style.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AboutUs = () => {
    return (
        <div className="containerAboutUs">
            <Header/>
            <main>
                <div class="content">
                    <h3>WorldSinema</h3>
                    <p>Место, где пользователь может смотреть фильмы и сериалы</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutUs;