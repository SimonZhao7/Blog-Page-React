import React from 'react';
import { useAppContext } from '../../context';
import NavLinks from '../NavLinks';
import { Content, UserWrapper, UserInfo } from './Sidebar.styles';
import { ThinButton } from '../../GlobalStyle';
import NoImg from '../../images/NoImg.png';


const Sidebar = () => {
    const { user, sidebarIsOpen } = useAppContext()

    return (
        <Content open={sidebarIsOpen}>
            <NavLinks />
            {user && 
                <UserWrapper open={sidebarIsOpen}>
                    <img src={user ? `http://localhost:8000${user.profile_picture}` : NoImg} alt='ppic' />
                    <UserInfo >
                        <h4>{user.username}</h4>
                        <ThinButton color={'var(--lightGray)'} hoverColor={'var(--darkGray)'}>Settings</ThinButton>
                    </UserInfo>
                </UserWrapper>
            }
        </Content>
    )
}

export default Sidebar