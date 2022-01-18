import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
import { Wrapper, Content } from './Sidebar.styles';


const Sidebar = () => {
    const { user, sidebarIsOpen, closeSidebar } = useAppContext()
    
    return (
        <Content open={sidebarIsOpen}>
            <Link to='/' onClick={closeSidebar}>Home</Link>
            <Link to='' onClick={closeSidebar}>Create Post</Link>
            {user
                ? <Link to='/logout' onClick={closeSidebar}>Logout</Link>
                : <Link to='/login' onClick={closeSidebar}>Login</Link>
            }
            <Link to='' onClick={closeSidebar}>Chat</Link>
            <Link to='' onClick={closeSidebar}>Profile</Link>
        </Content>
    )
}

export default Sidebar