import React, {useEffect} from 'react';
import '../../style.scss';
import {connect, useDispatch} from "react-redux";
import Pagination from "./Pagination/Pagination";
import Posts from "./Posts/Posts";
import AsideGenre from "./AsideGenre/AsideGenre";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    setActiveGenre, setActivePage,
    setGenresThunkCreator, setPictureForGenreThunkCreator,
    setPictureThunkCreator
} from "../../redux/motionPictureReducer";
import { useParams } from 'react-router';

const MotionPicture = (props) => {
    const dispatch = useDispatch();
    let params = useParams();
    let typeCinemas = params.type || 1
    //debugger
    useEffect(() => {
        dispatch(setGenresThunkCreator())
        dispatch(setPictureThunkCreator(1, 2, typeCinemas))
    },[typeCinemas]);
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