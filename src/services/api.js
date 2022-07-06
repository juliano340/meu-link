import axios from 'axios';

export const key = '4f030ded45f73cbb7bdcddbf6b86e10a1a3dc8da';

const api = axios.create({

    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;


