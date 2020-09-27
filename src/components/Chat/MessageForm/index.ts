import styled from 'styled-components';

export const WriteMessageForm = styled.form`
    width: 100%;
    height: fit-content;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    & textarea {
        display: flex;
        align-items: center;
        width: calc(95% - 40px);
        padding: 8px;
        border: none;
        resize: none;
        overflow: auto;
        border-radius: 4px 0 0 4px;
    }

    & button {
        border: none;
        width: 40px;
        height: 100%;
        border-left: 1px solid black;
        border-radius: 0 4px 4px 0;
    }
`;