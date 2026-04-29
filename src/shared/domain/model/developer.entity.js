/**
 * @summary Defines the developer metadata shown in the application footer.
 * @author GitHub Copilot
 */
export class Developer {
    constructor({ code = 'YOUR-CODE', firstName = 'Your', lastName = 'Name' } = {}) {
        this.code = code;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Gets the developer full name.
     * @returns {string}
     */
    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
}

export const defaultDeveloper = new Developer();

