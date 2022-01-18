import React from "react";
import { useAppContext } from "../../context";
import NavLinks from '../NavLinks';
import { Wrapper, Content, Image } from './Navbar.styles';
import { SidebarButton } from '../Button/Button.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import NoImg from '../../images/NoImg.png';

const Navbar = () => {
    const { openSidebar } = useAppContext()
  
    return (
        <Wrapper>
            <Content>
                <NavLinks />
            </Content>
            <Content>
                <Image src={NoImg} alt='profile-picture'/>
                <SidebarButton onClick={openSidebar}><GiHamburgerMenu /></SidebarButton>
            </Content>
        </Wrapper>
    )
};

export default Navbar;