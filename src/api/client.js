class HttpClient {

    #options = null;

    constructor({ headers } = {}) {
        this.#options = { headers }
    }

    async request(url, { method, body, headers }) {
        const { headers: commonHeaders } = this.#options;

        const response = await fetch(url, { method, body, headers: { ...commonHeaders, ...headers } });
        if (!response.ok) throw Error(response.statusText);

        return response.json();
    }

    async get(url) {
        return this.request(url, { method: 'GET' })
    }

    // TODO: post, put, patch ...
}

export default  HttpClient;