import React from "react";
import { Wrapper, Content, Image } from './Navbar.styles';
import { Link } from "react-router-dom";

const Navbar = ({ userImage }) => (
    <Wrapper>
        <Content>
            <Link to='' >Home</Link>
            <Link to='' >Create Post</Link>
            <Link to='' >Login</Link>
            <Link to='' >Chat</Link>
            <Link to='' >Profile</Link>
        </Content>
        <Content>
            <Image src={userImage} alt='profile-picture'/>
        </Content>
    </Wrapper>
);

export default Navbar;