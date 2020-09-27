import React from 'react';

import { MessageStyle } from './styles';

export interface IMessage {
    content: string;
    fromUser?: boolean;
    author?: string;
}

export const Message: React.FC<IMessage> = props => {
    return (
        <MessageStyle {...props}>
            <header><b>{props.author}</b> diz:</header>

            <main>{props.content}</main>
        </MessageStyle>
    )
}