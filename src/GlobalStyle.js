import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --lightBlue: rgb(118, 178, 184);
        --lightBlueHover: rgb(86, 131, 135);
        --lightGray: #bdbbb7;
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
`;

export default GlobalStyle;