export class BaseEndpoint {
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    getAll(config = {}) {
        return this.http.get(this.endpointPath, config);
    }

    getById(id, config = {}) {
        return this.http.get(`${this.endpointPath}/${id}`, config);
    }

    create(resource, config = {}) {
        return this.http.post(this.endpointPath, resource, config);
    }

    update(id, resource, config = {}) {
        return this.http.put(`${this.endpointPath}/${id}`, resource, config);
    }

    delete(id, config = {}) {
        return this.http.delete(`${this.endpointPath}/${id}`, config);
    }
}