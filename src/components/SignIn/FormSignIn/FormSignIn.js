import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";

const FormSignIn = () => {
    return (
        <form action="" className="formSignIn">
            <input type="text" placeholder="E-mail"/>
            <input type="password" placeholder="Пароль"/>
            <button>Войти</button>
            <NavLink to='/signUp' className="link">Регистрация</NavLink>
        </form>
    )
}

export default FormSignIn;