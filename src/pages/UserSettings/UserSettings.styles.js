import styled from 'styled-components';


export const SettingsContent = styled.div`
    display: block;
    padding: 0;

    form {
        padding: 0;
    }

    legend {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 20px;

        form {
            padding-top: 50px;
            flex: 2;
        }

        button {
            font-size: var(--fontSmall);
        }

        legend {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 1000px) {
        button {
            font-size: var(--fontReg);
        }
    }

    @media screen and (min-width: 1200px) {
        legend {
            font-size: 1.3rem;
        }
    } 
`

export const ButtonsWrapper = styled.div`
    flex: 1;
    padding: 100px 0 0 0;

    @media screen and (max-width: 768px) {
        padding: 0 0 10px 0;
    }
`