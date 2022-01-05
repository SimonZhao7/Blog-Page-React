import React from 'react';
// Components
import Navbar from './Navbar';
// Images
import NoImage from '../images/NoImg.png';

const Home: React.FC = () => (
    <>
    <Navbar userImage={NoImage}/>
    </>
);

export default Home;