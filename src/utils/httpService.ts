import Axios, { AxiosError } from 'axios';
import url from './url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HttpClient = Axios.create({
    baseURL: url
});

// Request interceptors
HttpClient.interceptors.request.use(async(config) => {
    // get the token
    const token = await AsyncStorage.getItem('accessToken');
    if (token !== null) {
        config.headers['authorization'] = `Bearer ${token}`;
        return config;
    }
    return config;
}, (error) => {
    Promise.reject(error.message);
});

// Response Interceptors
HttpClient.interceptors.response.use((config) => {
    return config;
}, async(error: AxiosError<any, any>) => {
     
    if (!error.response) {
        return Promise.reject(error.message);
    }
    if (error.response?.data.message instanceof Array) {
        const msg = error.response?.data.message as Array<any>;        
        return Promise.reject(JSON.stringify(msg));
    } 
    if (error.response?.status === 401 || error.response?.status === 403) {
        await AsyncStorage.setItem('accessToken', '')
    }
    return Promise.reject(error.response.data.message);
})

export default HttpClient;
