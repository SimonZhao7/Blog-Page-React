import styled from 'styled-components';


export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 12px 0;
`

export const CommentImg = styled.div`
    flex: 1;

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
        border: solid 2px var(--lightBlue);
    }
`

export const CommentText = styled.div`
    flex: 11;

    p {
        margin: 0;
        margin-top: 5px;
        font-size: 14px;
    }
`