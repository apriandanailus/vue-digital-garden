import axios from 'axios';

export const API = axios.create({
    baseURL: `https://blog.apriandana.com/wp-json/wp/v2/`
})