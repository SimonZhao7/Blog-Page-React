import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: var(--lightBlue);
    height: 50px;
    width: 100%;
    padding: 10px;
    position: fixed;

    a {
        color: white;
        text-decoration: none;
        padding: 5px 8px;

        @media screen and (max-width: 768px) {
            display: none;
            font-size: var(--fontSmall);
        }

        @media screen and (max-width: 480px) {
            font-size: var(--fontSmallest);
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    display: block;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;