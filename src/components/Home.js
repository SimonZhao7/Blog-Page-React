import React, { createContext, useEffect } from 'react';
// Components
import Navbar from './Navbar';
// Images
import NoImage from '../images/NoImg.png';

const Home = () => {
      
    return (
    <>
    <Navbar userImage={NoImage}/>
    </>
    );
};

export default Home;