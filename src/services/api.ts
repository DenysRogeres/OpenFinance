import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://project-open-finance.vercel.app/api'
});
