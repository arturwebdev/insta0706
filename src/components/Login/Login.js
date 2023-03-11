import React, {useEffect} from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {login,selectUsers} from "../../store/slice/users/usersSlice";
import {fetchUsers} from "../../store/slice/users/usersApi";
import {useNavigate} from "react-router-dom";


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {usersData,currentUser} = useSelector(selectUsers)

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    },[currentUser])

    useEffect(() => {
        if (!usersData.length) {
            dispatch(fetchUsers())
        }
    },[])


    const validationSchema = yup.object().shape({
        login: yup.string().typeError('Must be a string').required('Required field'),
        password: yup.string().typeError('Must be a string').min(3, 'Very short password').required('Required field'),

    })
    return (
        <Formik

            initialValues={{
                login: 'bret',
                password:'gwenborough'
            }}

            onSubmit={(value,{resetForm})=>{
                dispatch(login(value))
                resetForm()
            }}

            validateOnBlur

            validationSchema={validationSchema}

        >

            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (

                <form className='login-form' onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <input className='login-input' name={`login`} type={`text`}  placeholder="login" onChange={handleChange} onBlur={handleBlur} value={values.login} />
                    {touched.login && errors.login && <p style={{color:'red'}}>{errors.login}</p>}
                    <br/><br/>
                    <input name={`password`}className='login-input' type={`password`} placeholder="password" onBlur={handleBlur}  onChange={handleChange} value={values.password}/>
                    {touched.password && errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                    <br/><br/>
                    <div className='flex_block'>
                        <button  className='submit' type={'submit'}>Log In </button>
                    <button type='button' className='submit'>Sign Up</button>
                    </div>
                </form>

            )}
        </Formik>
    )
}

export default Login