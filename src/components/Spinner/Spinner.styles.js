import styled from "styled-components";


export const SpinnerContent = styled.div`
    border: var(--lightGray) solid 5px;
    border-top: var(--darkGray) solid 5px;
    border-radius: 50%;
    animation: spin 0.5s infinite linear; 
    margin: auto;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    width: ${props => props.size ? props.size : '40px'};
    height: ${props => props.size ? props.size : '40px'};
`