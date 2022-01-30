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
    color: ${props => props.type === 'error' ? '#721c24' : '#0f5132'};
    background: ${props => props.type === 'error' ? '#f2dede' : '#d1e7dd'};
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
`;