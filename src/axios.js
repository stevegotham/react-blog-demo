import axios from 'axios';

const axios_instance = axios.create();
axios_instance.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios_instance.defaults.headers.common['Authorization'] = 'MY AUTH TOKEN';
axios_instance.defaults.headers.post['Content-Type'] = 'application/json';

export default axios_instance;
