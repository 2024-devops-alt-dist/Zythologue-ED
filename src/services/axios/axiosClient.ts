import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BEER_URL,
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Erreur dans la réponse Axios:', error);
        return Promise.reject(error);
    }
);

export default axiosClient;
