// noinspection JSUnusedGlobalSymbols
/**
 * @summary Provides reusable helpers to convert strings into kebab case.
 * @author GitHub Copilot
 */
export class KebabCaseConverter {
    /**
     * Converts any text value into kebab-case.
     * @param {string} text
     * @returns {string}
     */
    static fromText(text = '') {
        return String(text)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[’']/g, '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
}

if (false) {
    KebabCaseConverter.fromText('');
}

