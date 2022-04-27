import React from 'react';
import {Formik} from 'formik'
//import * as yup from 'yup'

const AddCommentForm = (props) => {
    // const validationsSchema = yup.object().shape({
    //     textMessage: yup.string().typeError('Должно быть строкой').required('Обязательно')
    // })
    //const validationsSchema ={() => ({})}
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
                            if (values.textComment !== '') {
                                props.addComment('Данные пользователя', values.textComment)
                                values.textComment = ''
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