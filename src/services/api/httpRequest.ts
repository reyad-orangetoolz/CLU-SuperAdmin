import axios, { AxiosError, AxiosResponse } from 'axios';
import { getCookie } from '../../helpers/Cookie';
import ResponseInterface from '../../interface/response.interface';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
if (!accessToken) throw Error('Access token not found in process env!');

// ## handle http request response
const responseBody = (response: AxiosResponse) => {
    return response.data;
};

// ## handle http request error
const errorResponseBody = (error: AxiosError) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.data;
    }

    return error.request;
};

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL_BASE,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${getCookie(accessToken)}`,
    },
});

const httpRequest = {
    get: <T>(url = '', params = {}) =>
        axiosInstance
            .get<ResponseInterface<T>>(url, {
                params: params,
            })
            .then(responseBody)
            .catch(errorResponseBody),

    post: <T>(url = '', body = {}) => axiosInstance.post<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    put: <T>(url = '', body = {}) => axiosInstance.put<ResponseInterface<T>>(url, body).then(responseBody).catch(errorResponseBody),

    delete: <T>(url = '', params = {}, body = {}) =>
        axiosInstance
            .delete<ResponseInterface<T>>(url, {
                data: body,
                params: params,
            })
            .then(responseBody)
            .catch(errorResponseBody),
};

export default httpRequest;
