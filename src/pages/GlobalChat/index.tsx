import React from 'react';

import { socket } from '../../services/socket';
import { Chat } from '../../components/Chat';
import { Topbar } from '../../components/Topbar';

const GlobalChat: React.FC = () => {
    return (
        <>
            <Topbar justifyContent="center">
                <h1>Chat Global</h1>
            </Topbar>

            <Chat
                socketClient={socket()} 
            />
        </>
    );
}

export default GlobalChat;