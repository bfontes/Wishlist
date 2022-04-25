import axios from 'axios';

export default class config {
    constructor(instance, baseURL) {
        this[instance] = axios.create({ baseURL });
    }
}