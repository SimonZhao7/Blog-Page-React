import styled from "styled-components";


export const DarkWrapper = styled.div`
    background: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

export const ModalContent = styled.div`
    width: 400px;
    height: 550px;
    background: white;
    border-radius: 5px;
    overflow-y: scroll;

    h3 {
        margin: 0;
        padding: 10px;
    }

    hr {
        margin-top: 0;
    }
`

export const IconWrapper = styled.div`
    position: absolute;    
    width: 20px;
    height: 20px;

    .cancel-icon {
        transition: color 0.15s ease;
        :hover {
            color: #6e6e6e;
            cursor: pointer;
        }
    }
`

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 20px;

    p {
        flex: 2;
    }

    div {
        flex: 1;
    }
`

export const UserImage = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 2px solid var(--lightBlue);
`