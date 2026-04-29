/**
 * @summary Controls the presidents collection state for the exploration view.
 * @author GitHub Copilot
 */
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { PresidentsApi } from '../infrastructure/presidents-api.js';
import { PresidentAssembler } from '../infrastructure/president.assembler.js';
import { PresidentRequest } from '../infrastructure/president.request.js';

const presidentsApi = new PresidentsApi();

export const usePresidentsStore = defineStore('presidents', () => {
    const presidents = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const hasLoaded = ref(false);

    const presidentsCount = computed(() => presidents.value.length);

    /**
     * Loads presidents from the public API.
     * @param {PresidentRequest} request
     * @returns {Promise<void>}
     */
    async function fetchPresidents(request = new PresidentRequest()) {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await presidentsApi.getPresidents(request);
            presidents.value = PresidentAssembler.toEntitiesFromResponse(response);
            hasLoaded.value = true;
        } catch (fetchError) {
            presidents.value = [];
            error.value = fetchError instanceof Error ? fetchError : new Error('Unable to fetch presidents.');
        } finally {
            isLoading.value = false;
        }
    }

    /**
     * Clears the current error state.
     */
    function clearError() {
        error.value = null;
    }

    return {
        presidents,
        isLoading,
        error,
        hasLoaded,
        presidentsCount,
        fetchPresidents,
        clearError,
    };
});

