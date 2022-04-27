import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";

const FormSignUp = () => {
    return (
        <form action="" className="formSignUp">
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Фамилия"/>
            <input type="text" placeholder="E-mail"/>
            <input type="password" placeholder="Пароль"/>
            <input type="password" placeholder="Повторите пароль"/>
            <div className="gender">
                <input type="radio" id="contactChoice1" name="contact" value="email"/>
                <label htmlFor="contactChoice1">Мужчина</label>
                <input type="radio" id="contactChoice2" name="contact" value="phone"/>
                <label htmlFor="contactChoice2">Женщина</label>
            </div>
            <button>Зарегестрироваться</button>
            {/*<a href="signIn.html" className="link">У меня уже есть аккаунт</a>*/}
            <NavLink to='/signIn' className="link">У меня уже есть аккаунт</NavLink>
        </form>
    )
}

export default FormSignUp;