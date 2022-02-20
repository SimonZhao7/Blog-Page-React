import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';

export const NavLinks = () => {
    const { user, removeUser, closeSidebar } = useAppContext()

    return (
        <>    
        <Link to='/' onClick={closeSidebar}>Home</Link>
        <Link to='/create' onClick={closeSidebar}>Create</Link>
        {user
            ? <Link to='/logout' onClick={removeUser}>Logout</Link>
            : <Link to='/login' onClick={closeSidebar}>Login</Link>
        }
        <Link to='' onClick={closeSidebar}>Chat</Link>
        {user 
            ? <Link to={`${user.username}`} onClick={closeSidebar}>Profile</Link>
            : <Link to='' onClick={closeSidebar}>Profile</Link>
        }
        </>
    )
}

export default NavLinks