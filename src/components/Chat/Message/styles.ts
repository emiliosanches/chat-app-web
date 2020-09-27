import styled from 'styled-components';

interface MessageProps {
    fromUser?: boolean;
}

export const MessageStyle = styled.article`
    padding: 10px;
    border-radius: ${(props: MessageProps) => props.fromUser ? '10px 10px 0 10px' : '10px 10px 10px 0'};
    width: max-content;
    max-width: 50vw;
    background: ${(props: MessageProps) => props.fromUser ? '#DDD' : '#333'};
    align-self: ${(props: MessageProps) => props.fromUser ? 'flex-end' : 'start'};
    ${(props: MessageProps) => props.fromUser ? 'color: black;' : ''}
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;

    & header {
        ${(props: MessageProps) => props.fromUser ? 'display: none;' : ''}
        font-size: 80%;
    }

    & main {
        
    }
`;