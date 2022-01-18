import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--lightBlue);
    border: 0;
    color: white;
    height: 40px;
    width: ${props => props.width ? props.width : "100%"};
    border-radius: 3px;
    font-size: var(--fontReg);

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--lightBlueHover);
    }
`;

export const SidebarButton = styled(Button)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`