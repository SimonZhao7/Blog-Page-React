import React from "react";
import { useAppContext } from "../../context";
import { Wrapper, Content, Image } from './Navbar.styles';
import { SidebarButton } from '../Button/Button.styles';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import NoImg from '../../images/NoImg.png';

const Navbar = () => {
    const { user, openSidebar } = useAppContext()
  
    return (
        <Wrapper>
            <Content>
                <Link to='/' >Home</Link>
                <Link to='' >Create Post</Link>
                {user
                    ? <Link to='/logout'>Logout</Link>
                    : <Link to='/login'>Login</Link>
                }
                <Link to='' >Chat</Link>
                <Link to='' >Profile</Link>
            </Content>
            <Content>
                <Image src={NoImg} alt='profile-picture'/>
                <SidebarButton onClick={openSidebar}><GiHamburgerMenu /></SidebarButton>
            </Content>
        </Wrapper>
    )
};

export default Navbar;