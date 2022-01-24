import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context";
import Error from "../../components/Error";
import { Form } from '../../GlobalStyle';
import { Button } from '../../GlobalStyle';
import { FullWrapper } from "../../GlobalStyle";


const Login = () => {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState({})
    const { user, handleSetUser } = useAppContext()

    const handleChange = (e) => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {...formState}

        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (response.status >= 200 && response.status <= 299) {
               // save token to session
               handleSetUser(result.token)
            } else {
                setErrors(result)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (user) {
        return <Navigate to='/'/>
    }

    return (
        <FullWrapper>
            <Form onSubmit={handleSubmit}>
                <legend>Login</legend>
                <Error errors={errors.non_field_errors} nonField={true}/>
                <label>Username</label>
                <input type='text' name='username' onChange={handleChange} required/>
                <label>Password</label>
                <input type='password' name='password' onChange={handleChange} required/>
                <p>Don't have an account? Register for one <a href='/register'>here</a></p>
                <Button>Log In</Button>
            </Form>
        </FullWrapper>
    )
}

export default Login;