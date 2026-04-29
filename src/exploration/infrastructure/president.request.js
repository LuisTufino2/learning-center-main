/**
 * @summary Describes the request used to fetch presidents from the public API.
 * @author GitHub Copilot
 */
export class PresidentRequest {
    constructor({ signal = null, params = {} } = {}) {
        this.signal = signal;
        this.params = params;
    }

    /**
     * Converts the request into an Axios config object.
     * @returns {{ signal: AbortSignal | null, params: Record<string, unknown> }}
     */
    toAxiosConfig() {
        return {
            signal: this.signal ?? undefined,
            params: this.params,
        };
    }
}

