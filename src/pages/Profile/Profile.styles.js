import styled from 'styled-components';

export const UserContent = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: var(--lightBlue) 2px solid;

        @media screen and (min-width: 1200px) {
            width: 180px;
            height: 180px;
        }
    }
`