/**
 * @summary Provides access to the public presidents API.
 * @author GitHub Copilot
 */
import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from '../../shared/infrastructure/base-endpoint.js';
import { PresidentRequest } from './president.request.js';

const presidentsApiBaseUrl = import.meta.env.VITE_PRESIDENTS_API_URL ?? 'https://api.sampleapis.com';
const presidentsEndpointPath = import.meta.env.VITE_PRESIDENTS_ENDPOINT_PATH ?? '/presidents/presidents';

export class PresidentsApi extends BaseApi {
    #presidentsEndpoint;

    constructor() {
        super(presidentsApiBaseUrl);
        this.#presidentsEndpoint = new BaseEndpoint(this, presidentsEndpointPath);
    }

    /**
     * Retrieves the president collection.
     * @param {PresidentRequest} request
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    getPresidents(request = new PresidentRequest()) {
        return this.#presidentsEndpoint.getAll(request.toAxiosConfig());
    }
}

