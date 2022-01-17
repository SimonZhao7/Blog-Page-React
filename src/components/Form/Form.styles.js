import styled from 'styled-components';

export const Form = styled.form`
    margin: 0 auto;
    padding-top: 100px;
    width: 575px;

    @media screen and (max-width: 575px) {
        width: 100%;
        padding: 100px 10px;

        legend {
            font-size: var(--fontSmall);
        }
    }

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
    }
`