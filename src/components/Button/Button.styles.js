import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--lightBlue);
    border: 0;
    color: white;
    height: 40px;
    width: ${props => props.width ? props.width : "100%"};
    border-radius: 3px;
    font-size: var(--fontReg);

    :hover {
        background-color: var(--lightBlueHover);
    }
`;