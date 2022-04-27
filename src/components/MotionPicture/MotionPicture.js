import React, {useEffect} from 'react';
import '../../style.scss';
import {connect, useDispatch} from "react-redux";
import Pagination from "./Pagination/Pagination";
import Posts from "./Posts/Posts";
import AsideGenre from "./AsideGenre/AsideGenre";
import AsideGenreBurger from "./AsideGenreBurger/AsideGenreBurger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    setActiveGenre, setActivePage,
    setGenresThunkCreator, setPictureForGenreThunkCreator,
    setPictureThunkCreator
} from "../../redux/motionPictureReducer";

const MotionPicture = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setGenresThunkCreator())
        dispatch(setPictureThunkCreator(1))
    },[]);
    return (
        <div className="containerMotionPicture">
            <Header />
            <main>
                <AsideGenre
                    genre={props.genre}
                    setActiveGenre={props.setActiveGenre}
                    setPictureForGenre = {props.setPictureForGenreThunkCreator}
                />
                {/*<AsideGenreBurger genre={props.genre}/>*/}
                <div className="content">
                    <Posts
                        dataPicture={props.dataPicture}
                        setActiveGenre={props.setActiveGenre}
                        setPictureForGenre = {props.setPictureForGenreThunkCreator}
                    />
                    <Pagination
                        motionPicture={props.motionPicture}
                        setPicture={props.setPictureThunkCreator}
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataPicture : state.motionPicture.motionData,
        motionPicture : state.motionPicture,
        genre : state.motionPicture.genre
    }
}


//export default MotionPicture;
export default connect(mapStateToProps,
    {
        setActiveGenre,
        setGenresThunkCreator,
        setPictureThunkCreator,
        setPictureForGenreThunkCreator,
        setActivePage})(MotionPicture);