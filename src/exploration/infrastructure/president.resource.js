/**
 * @summary Normalizes the president resource returned by the public API.
 * @author GitHub Copilot
 */
export class PresidentResource {
    constructor({ id = null, ordinal = '', name = '', yearsInOffice = '', vicePresidents = [], photo = '' } = {}) {
        this.id = id;
        this.ordinal = ordinal;
        this.name = name;
        this.yearsInOffice = yearsInOffice;
        this.vicePresidents = Array.isArray(vicePresidents) ? vicePresidents : [];
        this.photo = photo;
    }

    /**
     * Returns a plain serializable object.
     * @returns {{id: number|null, ordinal: number|string, name: string, yearsInOffice: string, vicePresidents: string[], photo: string}}
     */
    toJSON() {
        return {
            id: this.id,
            ordinal: this.ordinal,
            name: this.name,
            yearsInOffice: this.yearsInOffice,
            vicePresidents: this.vicePresidents,
            photo: this.photo,
        };
    }
}

