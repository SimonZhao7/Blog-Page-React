import styled from "styled-components";


export const Content = styled.div`
    position: absolute;
    background: var(--lightBlue);
    height: 100%;
    width: ${props => props.open ? '45%' : '0%'};
    right: 0;
    transition: width 0.5s;

    a {
        display: block;
        color: white;
        text-decoration: none;
        width: 100%;
        padding: 10px 15px;
        overflow-x: hidden;
        
        :hover {
            background-color: var(--lightBlueHover);
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const UserWrapper = styled.div`
    display: flex;
    color: white;
    padding: 10px;
    gap: 15px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        margin: 15px 0 0;
    }

    button {
        margin-bottom: 10px;
    }
`