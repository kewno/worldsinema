import React, {useEffect} from 'react';
import '../../style.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Comments from "./Comments/Comments";
import Frames from "./Frames/Frames";
import VideoWrap from "./VideoWrap/VideoWrap";
import {connect, useDispatch, useSelector} from "react-redux";
import {
    addComment, setActivePictureThunkCreator,
    setCommentsForPictureThunkCreator, toggleFavorites,
    setPictureForGenreThunkCreator
} from "../../redux/motionPictureReducer";

const Picture = (props) => {
    //debugger
    const dispatch = useDispatch();
    let user = useSelector(state => state.motionPicture.auth)
    //debugger
    let idUser = user.id ? user.id : 0
    useEffect(() => {
        let arr = window.location.pathname.split('/')
        dispatch(setActivePictureThunkCreator(arr[arr.length - 1], idUser))
        dispatch(setCommentsForPictureThunkCreator(arr[arr.length - 1]))
    },[]);
    return (
        <div className="containerPicture">
            <Header />
            <main>
                <div className="content">

                    <div className="picture">
                        <h2 className="name">{props.cinema.name}</h2>

                        <VideoWrap description={props.cinema.description}
                                   tags={props.cinema.tags}
                                   rating={props.cinema.rating}
                                   favourites={props.cinema.favourites}
                                   toggleFavorites={props.toggleFavorites}
                                   setPictureForGenre={props.setPictureForGenreThunkCreator}
                                   path={props.cinema.path}
                        />

                        <Frames/>

                        <Comments
                                  addComment={props.addComment}
                                  comments={props.comments}
                        />

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.motionPicture.comments,
        cinema : state.motionPicture.activeCinema //state.motionPicture.activeCinema
    }
}
//dispatch(setCommentsForPicture(1))
export default connect(mapStateToProps,
    {toggleFavorites,
                    setCommentsForPictureThunkCreator,
                    setActivePictureThunkCreator,
                    setPictureForGenreThunkCreator,
                    addComment})(Picture);
//export default Picture;