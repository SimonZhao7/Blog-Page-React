import styled from 'styled-components';

export const UserInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
    }

    h2 {
        font-size: 1.75rem;
        margin-bottom: 0;
    }

    @media screen and (max-width: 1200px) {
        h2 {
            font-size: 1.25rem;
        }
    }
`

export const UserNumbers = styled.div`
    flex: 1;
    display: block;
    text-align: center;

    h4 {
        font-size: var(--fontReg);
        margin-bottom: 0;
    }

    @media screen and (min-width: 1200px) {
        h4 {
            font-size: 1.25rem;
        }
    }
`