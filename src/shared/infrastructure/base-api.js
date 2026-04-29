import axios from 'axios';

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

export class BaseApi {
    #http;

    constructor(baseURL = platformApi) {
        this.#http = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }

    get http() {
        return this.#http;
    }
}