import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import Error from './Error';
import { Button } from './Button/Button.styles';
import { Form } from './Form/Form.styles';

const Register = () => {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {...formState}
        console.log(data)

        try {
            const response = await fetch('http://localhost:8000/api/CustomUserAPI/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (response.status >= 200 && response.status <= 299) {
                console.log('redirect pls')
                setRedirect(true)
            } else {
                setErrors(result)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        {redirect && <Navigate to='/'/>}
        <Form onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
            <legend>Register</legend>
            <Error errors={errors.non_field_errors} nonField={true}/>
            <Error errors={errors.email}/>
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} required />
            <Error errors={errors.username}/>
            <label>Username</label>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
            <Error errors={errors.password}/>
            <label>Password</label>
            <input type="password" placeholder="Enter a Password" name="password" onChange={handleChange} required />
            <Error errors={errors.password2}/>
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" name="password2" onChange={handleChange} required />
            <Button type='submit'>Register</Button>
        </Form>  
        </> 
    )
}

export default Register;