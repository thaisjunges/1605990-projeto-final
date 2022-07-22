import axios from 'axios';

//url da minha API
const baseURL = 'http://localhost:3030';

const api = axios.create({
    baseURL
})

export default api;