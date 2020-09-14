/**
 * Имитиция сервисного слоя, тут идет обращение с апи клиентом
 * 
 * обычно сервисы делю по принципу - для каждого микросервиса свой сервис
 */

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