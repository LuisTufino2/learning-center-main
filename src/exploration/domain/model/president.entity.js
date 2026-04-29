/**
 * @summary Represents a US president in the exploration domain.
 * @author GitHub Copilot
 */
export class President {
    constructor({ id = null, ordinal = '', name = '', yearsInOffice = '', vicePresidents = [], photo = '' } = {}) {
        this.id = id;
        this.ordinal = ordinal;
        this.name = name;
        this.yearsInOffice = yearsInOffice;
        this.vicePresidents = vicePresidents;
        this.photo = photo;
    }

    /**
     * Indicates whether the president has a photo available.
     * @returns {boolean}
     */
    get hasPhoto() {
        return Boolean(this.photo);
    }
}

