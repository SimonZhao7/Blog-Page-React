import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context';
import Message from '../../components/Message';
import { ContentWrapper, Form, FormInput, Button } from '../../GlobalStyle';
import { SettingsContent, ButtonsWrapper } from './UserSettings.styles';


const UserSettings = () => {
    const { user, token, handleFetchUser } = useAppContext()
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('change_username')
    const fileRef = useRef(null)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value,
        })
    }

    const handleSetType = (type) => {
        setType(type)
        setFormData({})
        setErrors([])
        setMessage()
    }

    const handleSubmit = async (e) => {
        const submitData = new FormData()
        Object.keys(formData).forEach(key => submitData.append(key, formData[key]))

        e.preventDefault()

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/CustomUserAPI/${user.id}/type=${type}/`, {
                method: 'PUT',
                headers: {
                    Authorization: `Token ${token}`,
                },
                body: submitData
            })
            const data = await response.json()
            if (response.status >= 200 && response.status <= 299) {
                handleFetchUser(token)
                setErrors([])
                switch (type) {
                    case 'change_email':
                        setMessage('You have successfully changed your email')
                        break;
                    case 'change_password': 
                        setMessage('You have successfully changed your password')
                        break;
                    case 'change_profile_picture':
                        setMessage('You have successfully changed your profile picture')
                        break;
                    default:
                        setMessage('You have successfully changed your username')
                        break;
                }
            } else {
                setErrors(data.non_field_errors)
                setMessage()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderForm = (type) => {
        switch (type) {
            case 'change_email':
                return (
                    <Form onSubmit={handleSubmit}>
                        <legend>Change Email</legend>
                        <Message errors={errors} nonField={true} />
                        <Message message={message} nonField={true} />
                        <label>New Email</label>
                        <FormInput type='text' name='email' onChange={handleChange} required/>
                        <label>Password</label>
                        <FormInput type='password' name='password' onChange={handleChange} required/>
                        <Button type='submit'>Change Email</Button>
                    </Form>
                )
            case 'change_password': 
                return (
                    <Form onSubmit={handleSubmit}>
                        <legend>Change Password</legend>
                        <Message errors={errors} nonField={true} />
                        <Message message={message} nonField={true} />
                        <label>Current Password</label>
                        <FormInput type='password' name='password' onChange={handleChange} required/>
                        <label>New Password</label>
                        <FormInput type='password' name='new_password' onChange={handleChange} required/>
                        <label>Confirm New Password</label>
                        <FormInput type='password' name='confirm_password' onChange={handleChange} required/>
                        <Button type='submit'>Change Password</Button>
                    </Form>
                )
            case 'change_profile_picture':
                return (
                    <Form onSubmit={handleSubmit} method='PUT' encType='multipart/form-data'>
                        <legend>Change Profile Picture</legend>
                        <Message errors={errors} nonField={true} />
                        <Message message={message} nonField={true} />
                        <label>New Profile Picture</label>
                        <Button type='button' onClick={() => fileRef.current.click()} extraStyle={'margin-bottom: 10px;'}>Choose File</Button>
                        <FormInput type='file' name='profile_picture' ref={fileRef} onChange={handleChange} required/>
                        <label>Password</label>
                        <FormInput type='password' name='password' onChange={handleChange} required/>
                        <Button type='submit'>Change Profile Picture</Button>
                    </Form>
                )
            default: // change_username
                return (
                    <Form onSubmit={handleSubmit}>
                        <legend>Change Username</legend>
                        <Message errors={errors} nonField={true} />
                        <Message message={message} nonField={true} />
                        <label>New Username</label>
                        <FormInput type='text' name='username' onChange={handleChange} required/>
                        <label>Password</label>
                        <FormInput type='password' name='password' onChange={handleChange} required/>
                        <Button type='submit'>Change Username</Button>
                    </Form>
                )
        }
    }

    return (
        <ContentWrapper>
            {!user && <Navigate to={'/login'} />}
            <SettingsContent>
                <ButtonsWrapper>
                    <Button onClick={() => handleSetType('change_username')}>Change Username</Button>
                    <Button onClick={() => handleSetType('change_password')}>Change Password</Button>
                    <Button onClick={() => handleSetType('change_email')}>Change Email</Button>
                    <Button onClick={() => handleSetType('change_profile_picture')}>Change Profile Picture</Button>
                </ButtonsWrapper>
                {renderForm(type)}
            </SettingsContent>
        </ContentWrapper>
    )
}

export default UserSettings