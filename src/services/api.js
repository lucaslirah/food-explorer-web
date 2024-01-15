import axios from "axios";

export const api = axios.create({
    baseURL: 'https://foodexplorer-api-lrmz.onrender.com'
});