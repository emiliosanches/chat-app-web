import styled, { keyframes } from "styled-components";

const rotating = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

export const RotatingImg = styled.img`
    max-height: 20vh;
    max-width: 40vw;
    animation: ${rotating} 1s linear infinite;
`;