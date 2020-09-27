import SocketIOClient from 'socket.io-client';

export const socket = () => SocketIOClient('http://25.42.11.72:25565/');