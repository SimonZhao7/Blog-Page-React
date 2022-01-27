import React, { useState, useRef } from 'react';
import { ContentWrapper, Form, Button } from '../../GlobalStyle';


const UserSettings = () => {
    const [type, setType] = useState('changeUsername')
    const fileRef = useRef(null)

    const renderForm = (type) => {
        switch (type) {
            case 'changeEmail':
                return (
                    <Form>
                        <label>New Email</label>
                        <input type='text' name='newEmail' required/>
                        <label>Password</label>
                        <input type='password' name='password' required/>
                        <Button>Change Email</Button>
                    </Form>
                )
            case 'changePassword': 
                return (
                    <Form>
                        <label>Current Password</label>
                        <input type='text' name='password' required/>
                        <label>New Password</label>
                        <input type='password' name='newPassword' required/>
                        <label>Confirm New Password</label>
                        <input type='password' name='newPassword2' required/>
                        <Button>Change Password</Button>
                    </Form>
                )
            case 'changeProfilePicture':
                return (
                    <Form>
                        <label>New Profile Picture</label>
                        <Button onClick={() => fileRef.current.click()}>Choose File</Button>
                        <input type='file' name='profilePicture' ref={fileRef} required/>
                        <Button>Change Profile Picture</Button>
                    </Form>
                )
            default: // changeUsername
                return (
                    <Form>
                        <label>New Username</label>
                        <input type='text' name='newUsername' required/>
                        <label>Password</label>
                        <input type='password' name='password' required/>
                        <Button>Change Username</Button>
                    </Form>
                )
        }
    }

    return (
        <ContentWrapper>
            <div>
                <Button onClick={() => setType('changeUsername')}>Change Username</Button>
                <Button onClick={() => setType('changePassword')}>Change Password</Button>
                <Button onClick={() => setType('changeEmail')}>Change Email</Button>
                <Button onClick={() => setType('changeProfilePicture')}>Change Profile Picture</Button>
            </div>
            {renderForm(type)}
        </ContentWrapper>
    )
}

export default UserSettings