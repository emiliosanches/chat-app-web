import styled from 'styled-components';

export const Header = styled.header`
    text-align: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-weigth: 500;
        margin: 0 0 10px;
    }

    span {
        font-weigth: 400;
    }
`;

export const Main = styled.main`
    margin-top: 30px;
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    height: 30vh; width: 60vw;
    background: #111;
    border-radius: 8px;
`;

export const SignupForm = styled.form`
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-radius: 16px;


    h1 {
        margin: 0;
    }

    .input-block {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    svg {
        box-sizing: content-box;
        padding: 5px;
        height: 15px; width: 15px;
        background: black;
        border-radius: 4px 0 0 4px;
    }

    input {
        height: 25px;
        border: 1px solid black;
        border-radius: 0 4px 4px 0;
        width: 100%;
        padding: 0 10px;
        margin-right: 10px;
    }

    button {
        height: 35px;
        padding: 10px 20px;
        background: #444;
        color: white;
        border: none;
    }
`;