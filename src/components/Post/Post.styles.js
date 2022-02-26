import styled from "styled-components";


export const PostContent = styled.div`
    display: block;
    width: 100%;
    max-width: 568px;
    margin-bottom: 15px;
    border: var(--lightBlue) 2px solid;

    h4 {
        margin: 0;
    }
    
    .one-one {
        aspect-ratio: 1 / 1;
        width: 100%;
    }

    .four-three {
        aspect-ratio: 4 / 3;
        width: 100%;
    }

    .nine-sixteen {
        aspect-ratio: 9 / 16;
        height: 100%;
    }

    .sixteen-nine {
        aspect-ratio: 16 / 9;
        width: 100%;
    }
`

export const PostImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    aspect-ratio: 1 / 1;
`

export const PostImg = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
`