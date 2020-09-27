import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import TextareaAutosize from 'react-textarea-autosize';

import { LoggedUserContext } from '../LoggedUserContext';
import { IMessage, Message } from './Message';
import { WriteMessageForm } from './MessageForm';

import { ChatContainer } from './Container';

interface IIncomingMessage {
    content: string;
    author: string;
}

interface ChatProps {
    chatId?: string;
    socketClient: SocketIOClient.Socket;
}

export const Chat: React.FC<ChatProps> = ({ socketClient: io }) => {

    const [messageInputVal, setMessageInputVal] = useState("");

    const [messages, setMessages] = useState<IMessage[]>([]);

    const onNewMessage = (msg: IMessage) => {
        setMessages(prevMessages => ([
            ...prevMessages,
            msg
        ])); 
    }

    const containerRef = useRef<HTMLDivElement>(null);

    const userContext = useContext(LoggedUserContext);

    const username = userContext?.user;

    useEffect(() => {
        io.on('connected', () => {
            io.emit('register', {
                username
            });
        });

        io.on('message', (msg: IIncomingMessage) => {
            onNewMessage({
                content: msg.content,
                fromUser: msg.author === userContext?.user,
                author: msg.author === userContext?.user ? undefined : msg.author
            })
        }); 

    }, []);
    

    useEffect(() => {
        if (containerRef.current)
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
    })

    function handleChangeMessageInput(evt: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessageInputVal(evt.target.value);
    }

    function sendMessage(evt?: React.FormEvent) {
        evt?.preventDefault();

        io.emit('message', {
            content: messageInputVal,
            author: userContext?.user
        } as IIncomingMessage)

        setMessageInputVal("");
    }

    function detectEnter(evt: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (evt.key === 'Enter') {
            if (!evt.shiftKey) {
                evt.preventDefault();

                sendMessage();
            }
        }
    }

    return (
        <>
            <ChatContainer ref={containerRef}>
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        fromUser={message.fromUser}
                        content={message.content}
                        author={message.author}
                    />
                ))}
            </ChatContainer>

            <WriteMessageForm onSubmit={sendMessage}>
                <TextareaAutosize
                    id="message-text"
                    minRows={1}
                    maxRows={5}
                    onChange={handleChangeMessageInput}
                    onKeyDown={detectEnter}
                    value={messageInputVal}
                />
                <button type="submit"><FaPaperPlane /></button>
            </WriteMessageForm>
        </>
    );
}