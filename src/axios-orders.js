import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3c9b4.firebaseio.com/'
});

export default instance;