import styled from 'styled-components';

export const Wrapper = styled.ul`
    color: darkred;
    margin-bottom: 5px;
    padding: 0;
    font-size: var(--fontReg);

    @media screen and (max-width: 768px) {
        font-size: var(--fontSmall);
    }
`

export const Alert = styled.div`
    width: 100%;
    color: #721c24;
    background: #f2dede;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
`;