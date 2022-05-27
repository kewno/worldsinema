import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../../style.scss';
import FormSignIn from "./FormSignIn/FormSignIn";

const SignIn = () => {
    const navigate = useNavigate()
    let user = useSelector(state=> state.motionPicture.authUser)
    // {user ? navigate(`/`) : navigate(`/signIn`)}
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