import React from 'react';
import '../../../style.scss';
import {Field, Formik} from 'formik'
import * as yup from 'yup'
import { registrationThunkCreator } from '../../../redux/motionPictureReducer';
import { useDispatch } from 'react-redux';

const FormSignUp = () => {
    const validationsSchema = yup.object().shape({
        name : yup.string().typeError('Должно быть строкой').required('Обязательно'),
        surname : yup.string().typeError('Должно быть строкой').required('Обязательно'),
        login : yup.string().email('Введите верный email').required('Обязательно'),
        password : yup.string().typeError('Должно быть строкой').required('Обязательно'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    });
    let dispatch = useDispatch()
    return (
        <Formik initialValues={{
            name: '',
            surname: '',
            login: '',
            password: '',
            confirmPassword: '',
            gender: 'М',
            //contact: ''
        }}
        validateOnBlur
        onSubmit={(data) => dispatch(registrationThunkCreator(data))}//props.setAuthThunkCreator(data.login, data.password)
        validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
               <div className="formSignIn">
                   {/* <p> */}
                       {/* <label>Login</label> */}
                       <input
                           type={'text'}
                           name={'name'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           placeholder="Имя"
                       />
                       {touched.name && errors.name && <p className='form-error'>{errors.name}</p>}

                       <input
                           type={'text'}
                           name={'surname'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.surname}
                           placeholder="Фамилия"
                       />
                       {touched.surname && errors.surname && <p className='form-error'>{errors.surname}</p>}

                       <input
                           type={'text'}
                           name={'login'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.login}
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

                       <input
                            type={'password'}
                            name={'confirmPassword'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder="Повторите пароль"
                        />
                        {touched.confirmPassword && errors.confirmPassword && <p className='form-error'>{errors.confirmPassword}</p>}

                        <div className="gender">
                            <input type="radio" checked id="contactChoice1" name="gender" value={"M"}/>
                            <label htmlFor="contactChoice1">Мужчина</label>
                            <input type="radio" id="contactChoice2" name="gender" value={"F"}/>
                            <label htmlFor="contactChoice2">Женщина</label>
                            
                        </div>
                   
                   <button className="link"
                     disabled={!isValid && !dirty}
                     onClick={handleSubmit}//   console.log(!isValid + " " + !dirty)
                     type={'submit'}
                   >Отправить</button>
                   {/* {props.errors ? <p>{props.errors}</p> : ''} */}
               </div>
            )}
        </Formik>
    )
    // return (
    //     <form action="" className="formSignUp">
    //         <input type="text" placeholder="Имя"/>
    //         <input type="text" placeholder="Фамилия"/>
    //         <input type="text" placeholder="E-mail"/>
    //         <input type="password" placeholder="Пароль"/>
    //         <input type="password" placeholder="Повторите пароль"/>
    //         <div className="gender">
    //             <input type="radio" id="contactChoice1" name="contact" value="email"/>
    //             <label htmlFor="contactChoice1">Мужчина</label>
    //             <input type="radio" id="contactChoice2" name="contact" value="phone"/>
    //             <label htmlFor="contactChoice2">Женщина</label>
    //         </div>
    //         <button>Зарегестрироваться</button>
    //         {/*<a href="signIn.html" className="link">У меня уже есть аккаунт</a>*/}
    //         <NavLink to='/signIn' className="link">У меня уже есть аккаунт</NavLink>
    //     </form>
    // )
}

export default FormSignUp;