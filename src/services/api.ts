import Axios from 'axios';
import { server_url } from '../data.json';

export const api = Axios.create({
    baseURL: server_url,
    withCredentials: true
});