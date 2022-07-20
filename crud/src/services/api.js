import axios from 'axios';

//url da minha API
const baseUrl = 'http://localhost:3030';

const api = axios.create({
    baseUrl
})

export default api;