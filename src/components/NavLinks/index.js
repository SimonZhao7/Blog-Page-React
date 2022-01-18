import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';

export const NavLinks = () => {
    const { user, closeSidebar } = useAppContext()

    return (
        <>    
        <Link to='/' onClick={closeSidebar}>Home</Link>
        <Link to='' onClick={closeSidebar}>Create Post</Link>
        {user
            ? <Link to='/logout' onClick={closeSidebar}>Logout</Link>
            : <Link to='/login' onClick={closeSidebar}>Login</Link>
        }
        <Link to='' onClick={closeSidebar}>Chat</Link>
        <Link to='' onClick={closeSidebar}>Profile</Link>
        </>
    )
}

export default NavLinks