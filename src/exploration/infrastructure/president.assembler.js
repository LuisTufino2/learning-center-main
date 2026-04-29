/**
 * @summary Maps API responses into president domain entities.
 * @author GitHub Copilot
 */
import { President } from '../domain/model/president.entity.js';
import { PresidentResource } from './president.resource.js';
import { PresidentResponse } from './president.response.js';

export class PresidentAssembler {
    /**
     * Converts a resource into a domain entity.
     * @param {PresidentResource|object} resource
     * @returns {President}
     */
    static toEntityFromResource(resource) {
        const presidentResource = resource instanceof PresidentResource
            ? resource
            : new PresidentResource(resource);

        return new President(presidentResource.toJSON());
    }

    /**
     * Converts an Axios response into a list of domain entities.
     * @param {PresidentResponse|object} response
     * @returns {President[]}
     */
    static toEntitiesFromResponse(response) {
        const presidentResponse = response instanceof PresidentResponse
            ? response
            : PresidentResponse.fromAxiosResponse(response);

        if (!presidentResponse.isSuccessful) {
            return [];
        }

        return presidentResponse.resources.map(resource => this.toEntityFromResource(resource));
    }
}

