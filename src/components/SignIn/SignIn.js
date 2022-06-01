import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../../style.scss';
import FormSignIn from "./FormSignIn/FormSignIn";

const SignIn = () => {
    const navigate = useNavigate()
    //const dispatch = useDispatch();
    let user = useSelector(state => state.motionPicture.auth)
    let errors = useSelector(state => state.motionPicture.errors)
    //debugger
    //let idUser = user.id ? user.id : 0;
    useEffect(() => {
        if (user.id) navigate('/')
    },[user])
    
    useEffect(() => {
        if (errors.auth) alert(errors.auth)
    },[errors.auth])

    return (
        <div className="containerSignIn">
        <main>
            <div className="container">
                <img src={require('../../img/logo.png')} alt="logo" className="logo"/>
                <h1>WorldCinema</h1>
                <FormSignIn />
            </div>
        </main>
        </div>
    )
}

export default SignIn;