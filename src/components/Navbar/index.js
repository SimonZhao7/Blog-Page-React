import React from "react";
import { useAppContext } from "../../context";
import NavLinks from '../NavLinks';
import SearchBar from "../SearchBar";
import { Wrapper, Content, Image } from './Navbar.styles';
import { SidebarButton } from '../../GlobalStyle';
import { GiHamburgerMenu } from 'react-icons/gi';
import NoImg from '../../images/NoImg.png';

const Navbar = () => {
    const { user, openSidebar } = useAppContext()
  
    return (
        <Wrapper>
            <Content>
                <NavLinks />
            </Content>
            {user && 
                <Content>
                    <SearchBar />
                    <Image src={user ? `http://localhost:8000${user.profile_picture}` : NoImg} alt='profile-picture'/>
                    <SidebarButton onClick={openSidebar}><GiHamburgerMenu /></SidebarButton>
                </Content>
            }
        </Wrapper>
    )
};

export default Navbar;