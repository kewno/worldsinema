import React, { useEffect } from 'react';
import '../../style.scss';
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderUserData from "./HeaderUserData/HeaderUserData";
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        //dispatch(registrationThunkCreator('имя', 'фамилия', '2022-03-20', 'mail@mail.ru', '123', 1))
        //dispatch(isAuthThunkCreator())
    }, []) //name,surname,dateRegistr,idGender,login,password name, surname, dateRegistr, email, password, gender
    return (
        <header>
            {/*<div className={'container'}>*/}
                <HeaderTitle/>
                <HeaderMenu/>
                <HeaderUserData/>
            {/*</div>*/}
        </header>
    )
}

export default Header;