import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin: 20px auto;
    }

    & button {
        display: flex;
        align-items: center;
        border: none;
        height: 35px;
        cursor: pointer;
    }

    & button svg {
        margin-left: 5px;
    }
`;