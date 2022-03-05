import styled from 'styled-components';


export const CommentForm = styled.form`
    display: flex;
    width: 100%;
    border: ${props => props.isReply && '2px solid var(--lightBlue)'};
    border-top: 2px solid var(--lightBlue);
    margin: ${props => props.isReply && '5px 0'};
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