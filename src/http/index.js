import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://order.drcash.sh/v1/order'
});

const interceptor = (config) => {
    config.headers.authorization = 'Bearer NWJLZGEWOWETNTGZMS00MZK4LWFIZJUTNJVMOTG0NJQXOTI3';
    return config;
}

$host.interceptors.request.use(interceptor);

export {
    $host
}
