import React from 'react';
import  { Route, Routes } from 'react-router-dom';
// context 
import { useAppContext } from '../../context';
// components
import Home from '../Home';
import Login from '../Login';
import Logout from '../Logout';
import Register from '../Register';
import Profile from '../Profile';


const Main = () => {
    const { closeSidebar } = useAppContext()
    
    return (
        <main onClick={closeSidebar}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/logout' element={<Logout />}/>
                <Route path='/:username' element={<Profile />}/>
            </Routes>
        </main>
    )
}

export default Main