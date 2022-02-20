import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --lightBlue: rgb(118, 178, 184);
        --lightBlueHover: rgb(86, 131, 135);
        --lightGray: #bdbbb7;
        --darkGray: #666461;
        --fontSmallest: 0.75rem;
        --fontSmall: 0.875rem;
        --fontReg: 1rem;
        --fontMed: 1.5rem;
        --fontBig: 2rem;
    }    
    
    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body, main, #root {
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;
    }

    main {
        padding-top: 50px;
        background: #f0f0f0;
        overflow: auto;
    }
`;

// Wrappers
export const FullWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    padding: 10px;
    margin: auto;
    overflow-y: auto;

    @media screen and (min-width: 768px) {
        width: 70%;
        padding: 20px;
    }

    @media screen and (min-width: 1200px) {
        width: 60%;
    }
`

// Forms
export const Form = styled.form`
    margin: 0 auto;
    padding-top: 50px;
    width: 100%;
    max-width: 575px;

    legend {
        font-size: var(--fontMed);
        text-align: center;
        margin-bottom: 15px;
    }

    input[type='file'] {
        font-size: var(--fontReg);
        max-width: 575px;
        border: 0;
    }

    input[type='file']::file-selector-button {
        background-color: var(--lightBlue);
        color: white;
        width: 40%;
        height: 100%;
        border: 0;
        border-radius: 5px;
        font-size: var(--fontReg);
        transition: background-color 0.25s;
        margin-right: 15px;
    }

    input[type='file']::file-selector-button:hover {
        background-color: var(--lightBlueHover);
    }

    p {
        margin: 0 0 10px 0;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    > input, > textarea {
        width: 100%;   
        margin-bottom: 10px;
        border-radius: 5px;
        border: var(--lightGray) solid 2px;
        color: black; 

        transition: border-color 0.3s;

        :hover, :focus {
            outline: none;
            border-color: var(--darkGray);
        }
    }

    @media screen and (max-width: 575px) {
        width: 100%;
        padding: 50px 10px 0;
    }
`

export const FormInput = styled.input`
    height: 40px;
`

// Buttons
export const Button = styled.button`
    background: ${props => props.color ? props.color : 'var(--lightBlue)'};
    border: 0;
    color: white;
    height: 40px;
    width: ${props => props.width ? props.width : "100%"};
    border-radius: 3px;
    font-size: var(--fontReg);
    transition: background-color 0.25s;
    ${props => props.extraStyle && props.extraStyle}

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: ${props => props.hoverColor ? props.hoverColor : 'var(--lightBlueHover)'}
    }
`;

export const SidebarButton = styled(Button)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const ThinButton = styled(Button)`
    height: 20px;
    font-size: var(--fontSmall);
`

export default GlobalStyle;