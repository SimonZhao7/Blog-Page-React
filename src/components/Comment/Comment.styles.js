import styled from 'styled-components';


export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 12px 0;
    padding-left: ${props => props.isReply ? '40px' : 0};
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

export const CommentActions = styled.div`
    display: flex;
    margin: 10px 0;
    gap: 10px;
`

export const ReplyButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0;
    font-weight: 600;
    background-color: transparent;
    border: none;
    color: var(--darkGray);

    :hover {
        cursor: pointer;
    }
`

export const GrayLine = styled.div`
    display: inline-block;
    height: 1px;
    width: 20px;
    margin-right: 10px;
    background-color: darkgray;
`

export const HeartWrapper = styled.div`
    padding-top: 5px;
`