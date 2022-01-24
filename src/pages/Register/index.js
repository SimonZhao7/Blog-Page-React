import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Error from '../../components/Error';
import { Button } from '../../GlobalStyle';
import { Form } from '../../GlobalStyle';
import { FullWrapper } from '../../GlobalStyle';

const Register = () => {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {...formState}

        try {
            const response = await fetch('http://localhost:8000/api/CustomUserAPI/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (response.status >= 200 && response.status <= 299) {
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
        <FullWrapper>
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
                <p>Already have an account? Log in <Link to='/login'>here</Link></p>
                <Button type='submit'>Register</Button>
            </Form>  
        </FullWrapper>
    )
}

export default Register;