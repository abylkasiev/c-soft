import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://c-soft-b8b1c-default-rtdb.firebaseio.com'
})

export default instance