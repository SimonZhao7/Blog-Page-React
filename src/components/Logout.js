import React from 'react';
import { Navigate } from 'react-router-dom';


// Redirect to login
const Logout = () => (
    <Navigate to='/login' />
)

export default Logout