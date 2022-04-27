import React, {useEffect} from 'react';
import '../../style.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import MainSlider from "./MainSlider/MainSlider";
import {connect, useDispatch} from "react-redux";
import {setActiveCinema, setFaviritePictureThunkCreator} from "../../redux/mainReducer";

const Main = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFaviritePictureThunkCreator(1))
    },[]);
    return (
        <div className="mainContainer">
            <Header/>
            <main>
                <div className="content">
                    <MainHeader/>
        
                    <MainSlider dataPicture={props.dataPicture}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataPicture : state.main.favoriteMotionData
    }
}

export default connect(mapStateToProps, {setActiveCinema, setFaviritePictureThunkCreator})(Main);
//export default Main;