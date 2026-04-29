/**
 * @summary Builds White House History biography URLs for presidents.
 * @author GitHub Copilot
 */
import { KebabCaseConverter } from '../../../shared/domain/model/kebab-case-converter.js';

const whiteHouseBiographyBaseUrl = 'https://www.whitehousehistory.org/bios';

export class PresidentBiographyUrlBuilder {
    /**
     * Builds a biography URL using the president full name.
     * @param {string} fullName
     * @returns {string}
     */
    static fromPresidentName(fullName = '') {
        const normalizedParts = String(fullName)
            .split(/\s+/)
            .map(part => part.trim())
            .filter(Boolean);

        if (normalizedParts.length === 0) {
            return whiteHouseBiographyBaseUrl;
        }

        const slugSource = normalizedParts.length > 1
            ? `${normalizedParts[0]} ${normalizedParts[normalizedParts.length - 1]}`
            : normalizedParts[0];

        return `${whiteHouseBiographyBaseUrl}/${KebabCaseConverter.fromText(slugSource)}`;
    }
}

