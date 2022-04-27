import React from 'react';
import '../../style.scss';
import FormSignUp from "./FormSignUp/FormSignUp";

const SignUp = () => {
    return (
        <div className="containerSignUp">
            <main>
                <div className="container">
                    <img src={require('../../img/logo.png')} alt="logo" className="logo"/>
                    <h1>WorldCinema</h1>
                    <FormSignUp />
                </div>
            </main>
        </div>
    )
}

export default SignUp;