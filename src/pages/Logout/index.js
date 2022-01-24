import React from 'react';
import { Navigate } from 'react-router-dom';
import { FullWrapper } from '../../GlobalStyle';


// Redirect to login
const Logout = () => (
    <FullWrapper>
        <Navigate to='/login' />
    </FullWrapper>
)

export default Logout