// noinspection JSUnusedGlobalSymbols
/**
 * @summary Wraps the Axios response returned by the presidents API.
 * @author GitHub Copilot
 */
export class PresidentResponse {
    constructor({ status = 0, statusText = '', data = [] } = {}) {
        this.status = status;
        this.statusText = statusText;
        this.data = data;
    }

    /**
     * Builds a response wrapper from an Axios response object.
     * @param {{status?: number, statusText?: string, data?: unknown}} response
     * @returns {PresidentResponse}
     */
    static fromAxiosResponse(response = {}) {
        return new PresidentResponse({
            status: response.status ?? 0,
            statusText: response.statusText ?? '',
            data: response.data ?? [],
        });
    }

    /**
     * Indicates whether the response is successful.
     * @returns {boolean}
     */
    get isSuccessful() {
        return this.status >= 200 && this.status < 300;
    }

    /**
     * Returns the response data as an array.
     * @returns {Array}
     */
    get resources() {
        return Array.isArray(this.data) ? this.data : [];
    }
}

if (false) {
    const response = new PresidentResponse();
    void response.isSuccessful;
    void response.resources;
}

