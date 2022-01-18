import React from 'react';
import { useAppContext } from '../../context';
import NavLinks from '../NavLinks';
import { Content } from './Sidebar.styles';


const Sidebar = () => {
    const { sidebarIsOpen } = useAppContext()

    return (
        <Content open={sidebarIsOpen}>
            <NavLinks />
        </Content>
    )
}

export default Sidebar