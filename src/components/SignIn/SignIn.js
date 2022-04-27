import React from 'react';
import '../../style.scss';
import FormSignIn from "./FormSignIn/FormSignIn";

const SignIn = () => {
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