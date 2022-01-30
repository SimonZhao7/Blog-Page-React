import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import Message from '../../components/Message';
import { Button, Form, FullWrapper } from '../../GlobalStyle';

const Register = () => {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const submitData = new FormData()
        Object.keys(formState).map(key => (
            submitData.append(key, formState[key])
        ))

        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                body: submitData
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
                <Message errors={errors.non_field_errors} nonField={true}/>
                <Message errors={errors.email}/>
                <label>Email</label>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} required />
                <Message errors={errors.username}/>
                <label>Username</label>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
                <Message errors={errors.password}/>
                <label>Password</label>
                <input type="password" placeholder="Enter a Password" name="password" onChange={handleChange} required />
                <Message errors={errors.password2}/>
                <label>Confirm Password</label>
                <input type="password" placeholder="Re-enter your password" name="password2" onChange={handleChange} required />
                <p>Already have an account? Log in <Link to='/login'>here</Link></p>
                <Button type='submit'>Register</Button>
            </Form>  
        </FullWrapper>
    )
}

export default Register;