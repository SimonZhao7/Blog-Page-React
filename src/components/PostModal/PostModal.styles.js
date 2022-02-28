import styled from 'styled-components';
import { ModalContent } from '../ListModal/ListModal.styles';


export const PostModalContent = styled(ModalContent)`
    width: auto;
    height: 700px;
    display: flex;
`

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

export const PostImg = styled.img`
    max-width: 700px;
    max-height: 100%;
    object-fit: cover;
`

export const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
`

export const CommentList = styled.div`
    height: 100%;
    padding: 0 15px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const CommentForm = styled.form`
    display: flex;
    border-top: 2px solid var(--lightBlue);
`

export const CommentInput = styled.input`
    flex: 9;
    height: 30px;
    padding: 20px;
    border: 0;

    :focus {
        outline: none;
    }
`

export const CommentButton = styled.button`
    flex: 1;
    color: #046bd9;
    border-radius: 0;
    border: 0;
    background-color: white;

    :hover {
        cursor: pointer;
    }
`