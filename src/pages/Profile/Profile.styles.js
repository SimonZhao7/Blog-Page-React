import styled from 'styled-components';

export const UserWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    padding: 20px;

    @media screen and (min-width: 768px) {
        width: 70%;
        margin: auto;
    }
`

export const UserContent = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;

    img {
        width: 33%;
        height: 33%;
        border-radius: 50%;
        border: var(--lightBlue) 2px solid;

        @media screen and (min-width: 850px) {
            width: 30%;
            height: 30%
        }

        @media screen and (min-width: 1000px) {
            width: 28%;
            height: 28%
        }

        @media screen and (min-width: 1100px) {
            width: 24%;
            height: 24%
        }

        @media screen and (min-width: 1300px) {
            width: 22%;
            height: 22%
        }
    }
`

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
        font-size: var(--fontBig);
        margin-bottom: 0;
    }

    @media screen and (max-width: 575px) {
        h2 {
            font-size: var(--fontMed);
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