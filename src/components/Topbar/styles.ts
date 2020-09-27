import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const TopbarStyle = styled.header`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 40px;
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: #0D0D0D;

    & > button {
        background: none;
        border: none;
        color: white;
        width: 90px; height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
    }

    & section#children {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: ${(props: {justifyContent?: string} & HTMLAttributes<HTMLDivElement>) => props.justifyContent || 'start'};
    }
`;