import styled from 'styled-components';

export const PageContainer = styled.main`
    background-color: white;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background: #343434;
    padding: 0 78px;
    min-height: 100vh;

    & h1 {
        margin: 0;
    }
`;

export const Grid = styled.main`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 32px;
    grid-template-areas: "fimg ftext ftext" 
                         "stext stext simg";
    align-items: center;
    
    width: 100%;

    & #first-text {
        grid-area: ftext;
    }

    & #first-image {
        grid-area: fimg;
    }

    & #second-text {
        grid-area: stext;
    }

    & #second-image {
        grid-area: simg;
    }

    & div h2 {
        font-family: 'Nunito';
        font-weight: bold;
        font-size: 36px;
    }

    & div span {
        font-family: Nunito;
        font-size: 24px;
    }

    & #first-image img, & #second-image img {
        object-fit: cover;
        max-width: 100%;
        max-height: 30vh;
    }

    & #second-image img {

    }
`;

export const ButtonsContainer = styled.section`
    display: flex;
    flex-direction: row;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15vw; height: 7vh;
        text-decoration: none;
        border-radius: 1.75vh;
    }

    & #register-button {
        margin-right: 16px;
        color: black;
        background: white;
    }

    & #open-app-button {
        margin-left: 16px;
        color: white;
        background: #111;
    }
`;