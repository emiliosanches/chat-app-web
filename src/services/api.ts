import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'http://25.42.11.72:25565/',
    withCredentials: true
});