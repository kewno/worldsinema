import React from 'react';
import {Formik} from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { setCommentThunkCreator } from '../../../../redux/motionPictureReducer';
//import * as yup from 'yup'

const AddCommentForm = (props) => {
    // const validationsSchema = yup.object().shape({
    //     textMessage: yup.string().typeError('Должно быть строкой').required('Обязательно')
    // })
    //const validationsSchema ={() => ({})}
    let idCinema = useSelector(state => state.motionPicture.activeCinema.id)
    let user = useSelector(state => state.motionPicture.auth)
    let dispatch = useDispatch()
    return (
        <Formik initialValues={{
            textComment: ''
        }}
            //validateOnBlur
            //onSubmit={() => {}}
            //onSubmit={(values) => (values)} //props.addMessage
            //validationSchema={validationsSchema}
         >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                <textarea
                    onBlur={handleBlur}
                    name={'textComment'}
                    onChange={handleChange}
                    value={values.textComment}
                    placeholder={'Enter your submit'}
                    //cols="80"
                />
                    {/*{touched.textMessage && errors.textMessage && <p>{errors.textMessage}</p>}*/}
                    <button
                        onClick={() => {
                            if (user.id) {
                                if (values.textComment !== '') {
                                    //props.addComment('Данные пользователя', values.textComment)
                                    //debugger
                                    dispatch(setCommentThunkCreator(idCinema, values.textComment, user.id))//props.id
                                    values.textComment = ''
                                }
                            }
                        }}
                        type={'submit'}
                    >Отправить</button>
                </div>
            )}
        </Formik>
    )
}

export default AddCommentForm;