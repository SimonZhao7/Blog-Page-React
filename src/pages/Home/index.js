import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context';

const Home = () => {
    const { user } = useAppContext()
    return (
        <>
        {!user && <Navigate to='/login' />}
        <div>Home</div>
        </>
    );
};

export default Home;