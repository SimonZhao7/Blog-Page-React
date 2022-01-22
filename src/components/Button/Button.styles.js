import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.color ? props.color : 'var(--lightBlue)'};
    border: 0;
    color: white;
    height: 40px;
    width: ${props => props.width ? props.width : "100%"};
    border-radius: 3px;
    font-size: var(--fontReg);
    transition: background-color 0.25s;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: ${props => props.hoverColor ? props.hoverColor : 'var(--lightBlueHover)'}
    }
`;

export const SidebarButton = styled(Button)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const ThinButton = styled(Button)`
    height: 15px;
    font-size: var(--fontSmall);
`