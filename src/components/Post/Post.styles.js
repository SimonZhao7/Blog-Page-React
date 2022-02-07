import styled from "styled-components";


export const PostContent = styled.div`
    display: block;
    width: 100%;
    max-width: 568px;
    margin-bottom: 15px;
    border: var(--lightBlue) 2px solid;

    img {
        width: 100%;
        object-fit: cover;
    }

    h4 {
        margin: 0;
    }
    
    .one-one {
        aspect-ratio: 1 / 1;
    }

    .four-three {
        aspect-ratio: 4 / 3;
    }

    .nine-sixteen {
        aspect-ratio: 3 / 4;
    }

    .sixteen-nine {
        aspect-ratio: 16 / 9;
    }
`

export const PosterDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
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

export const PostData = styled.div`
    padding: 5px;
    border-top: var(--lightBlue) 2px solid;
`

export const IconBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
`   

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const Comment = styled.p`
    margin: 0;
`

export const DatePosted = styled.p`
    font-size: var(--fontSmallest);
    margin-bottom: 0;
`