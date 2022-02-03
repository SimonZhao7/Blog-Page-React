import styled from 'styled-components';
import { FormInput } from '../../GlobalStyle';


export const SearchInput = styled(FormInput)`
    height: 35px;
    margin: 0 20px 0 0;
    width: 350px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ResultWrapper = styled.div`
    position: absolute;
    background-color: white;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    width: 350px;
    max-height: 400px;
    overflow-y: scroll;
    opacity: 0;
    border-radius: 5px;

    transition: opacity 0.125s linear;

    .result-link {
        background: var(--lightBlue);
        display: block;
        width: 100%;
        height: 50px;
        padding: 10px;
        transition: background 0.3s ease;

        :hover {
            background-color: var(--lightBlueHover);
        }
    }


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ResultContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 15px;
`

export const ResultMessage = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`