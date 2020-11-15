import React from 'react';

import { socket } from '../../services/socket';
import { Chat } from '../../components/Chat';
import { Topbar } from '../../components/Topbar';

import { Container } from './styles';

const GlobalChat: React.FC = () => {
    return (
        <Container>
            <Topbar justifyContent="center">
                <h1>Chat Global</h1>
            </Topbar>

            <Chat
                socketClient={socket()} 
            />
        </Container>
    );
}

export default GlobalChat;