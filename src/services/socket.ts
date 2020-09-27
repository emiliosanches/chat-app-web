import SocketIOClient from 'socket.io-client';
import { server_url } from '../../data.json';

export const socket = () => SocketIOClient(server_url);