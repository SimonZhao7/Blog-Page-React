import styled from 'styled-components';

export const Form = styled.form`
    margin: 0 auto;
    padding-top: 50px;
    width: 575px;

    legend {
        font-size: var(--fontMed);
        text-align: center;
        margin-bottom: 15px;
    }

    input {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: var(--lightGray) solid 2px;
        color: black;

        transition: border-color 0.3s;

        :hover {
            border-color: var(--darkGray);
        }
    }

    p {
        margin: 0 0 10px 0;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 575px) {
        width: 100%;
        padding: 50px 10px 0;
    }
`