import Config from './config';

const API_URL= "https://run.mocky.io/v3/"

export default class Products extends Config {
  constructor() {
    super('axios', API_URL);
  }

  getProducts() {
    return this.axios.get('66063904-d43c-49ed-9329-d69ad44b885e');
  }
}