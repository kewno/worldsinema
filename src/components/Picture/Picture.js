import React from 'react';
import '../../style.scss';
import Pagination from "./Pagination/Pagination";
import Posts from "./Posts/Posts";
import AsideGenre from "./AsideGenre/AsideGenre";
import AsideGenreBurger from "./AsideGenreBurger/AsideGenreBurger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MotionPicture = () => {
    return (
        <div className="containerMotionPicture">
            <Header />
            <main>
                <AsideGenre/>
                <AsideGenreBurger/>
                <div className="content">
                    <Posts/>
                    <Pagination/>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MotionPicture;