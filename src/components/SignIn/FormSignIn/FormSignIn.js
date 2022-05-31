import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom";
import {Formik} from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { loginThunkCreator } from '../../../redux/motionPictureReducer';

const FormSignIn = () => {
    const validationsSchema = yup.object().shape({
        login : yup.string().email('Введите верный email').required('Обязательно'),
        password : yup.string().typeError('Должно быть строкой').required('Обязательно'),
        //confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    });
    let dispatch = useDispatch()
    
    return (
        <Formik initialValues={{
            login: '',
            password: '',
            //confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={(data) => dispatch(loginThunkCreator(data))}//loginThunkCreator
        validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
               <div className="formSignIn">
                   {/* <p> */}
                       {/* <label>Login</label> */}
                       <input
                           type={'text'}
                           name={'login'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           placeholder="E-mail"
                       />
                       {touched.login && errors.login && <p className='form-error'>{errors.login}</p>}
                   {/* </p> */}
                   {/* <p> */}
                       {/* <label>Password</label> */}
                       <input
                           type={'password'}
                           name={'password'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           placeholder="Пароль"
                       />
                       {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}
                   {/* </p> */}
                   {/* <p>
                       <label>Confirm password</label>
                       <input
                           type={'password'}
                           name={'confirmPassword'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.confirmPassword}
                       />
                       {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                   </p> */}
                   <button className="link"
                     disabled={!isValid && !dirty}
                     onClick={handleSubmit}//   console.log(!isValid + " " + !dirty)
                     type={'submit'}
                   >Войти</button>
                   <NavLink className="link" to='/signUp'>Регистрация</NavLink>
                   {/* {props.errors ? <p>{props.errors}</p> : ''} */}
               </div>
            )}
        </Formik>
        // <form action="" className="formSignIn">
        //     <input type="text" placeholder="E-mail"/>
        //     <input type="password" placeholder="Пароль"/>
        //     <button>Войти</button>
        //     <NavLink to='/signUp' className="link">Регистрация</NavLink>
        // </form>
    )
}

export default FormSignIn;