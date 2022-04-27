import React from 'react';
import '../../style.scss';

const SignIn = () => {
    return (
        <div className="containerSignIn">
        <main>
            <div className="container">
                {/*'../../img/logo.png'*/}
                <img src={require('../../img/logo.png')} alt="logo" className="logo"/>
                <h1>WorldCinema</h1>
                <form action="" className="formSignIn">
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Пароль"/>
                    <button>Войти</button>
                    <a href="signUp.html" className="link">Регистрация</a>
                </form>
            </div>
        </main>
        </div>
    )
}

export default SignIn;