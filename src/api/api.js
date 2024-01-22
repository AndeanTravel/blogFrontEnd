import axios from 'axios'

const api = axios.create({
    baseURL: 'http://ejercicio.test:8081/api',
    headers: {
        'Accept': 'application/json',

    }
})


export default api