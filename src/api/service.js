import Client from './client';

class Service {
    static #client = new Client();

    static async getGoods() {
        return this.#client.get('/data.json')
    }

    static async getNames() {
        return this.#client.get('/names.json')
    }
}

export default Service;