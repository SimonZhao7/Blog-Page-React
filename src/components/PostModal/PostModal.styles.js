import styled from 'styled-components';
import { ModalContent } from '../ListModal/ListModal.styles';


export const PostModalContent = styled(ModalContent)`
    width: auto;
    height: 700px;
    display: flex;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 50%;
        margin: 0 15px;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 100%;
    }
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

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const CommentList = styled.div`
    height: 100%;
    padding: 0 15px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`