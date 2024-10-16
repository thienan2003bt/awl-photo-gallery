import axios from 'axios';

const instance = axios.create({});

//REQUEST INTERCEPTOR
instance.interceptors.request.use((config) => {
    const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    if(unsplashAccessKey) {
        config.headers.Authorization = `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
    } else {
        console.error('Unsplash Access Key not found');
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});


//RESPONSE INTERCEPTOR
instance.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    const data = err?.response?.data;
    let msg = data.message;

    return data ?? Promise.reject(new Error(msg ?? ''));
});

export default instance;