import styled from 'styled-components';


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px;
    border-bottom: var(--lightBlue) 2px solid;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border: var(--lightBlue) 2px solid;
        border-radius: 50%;
    }

    a {
        color: black;
        text-decoration: none;
    }

    svg:hover, a:hover {
        cursor: pointer;
    }
`