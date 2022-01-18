import styled from "styled-components";


export const Content = styled.div`
    position: absolute;
    background: var(--lightBlue);
    height: 100%;
    width: ${props => props.open ? '45%' : '0%'};
    right: 0;
    transition: width 0.5s;

    a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
        padding: 10px 15px;
        
        :hover {
            background-color: var(--lightBlueHover);
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`