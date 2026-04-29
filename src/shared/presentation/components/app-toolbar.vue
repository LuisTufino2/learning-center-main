<!--
  @summary Renders the application toolbar with the institution logo and locale selector.
  @author GitHub Copilot
-->
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    locale: {
        type: String,
        required: true,
    },
    localeOptions: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['update:locale']);
const { t } = useI18n();

const clearbitLogoUrl = 'https://logo.clearbit.com/whitehousehistory.org';
const selectedLocale = computed({
    get() {
        return props.locale;
    },
    set(value) {
        emit('update:locale', value);
    },
});
</script>

<template>
    <pv-toolbar class="app-toolbar" aria-label="Application toolbar">
        <template #start>
            <div class="app-toolbar__brand">
                <img
                    :src="clearbitLogoUrl"
                    class="app-toolbar__logo"
                    :alt="t('toolbar.logoAlt')"
                    width="44"
                    height="44"
                />
                <div class="app-toolbar__titles">
                    <span class="app-toolbar__eyebrow">{{ t('toolbar.eyebrow') }}</span>
                    <strong class="app-toolbar__name">{{ t('toolbar.institutionName') }}</strong>
                </div>
            </div>
        </template>

        <template #end>
            <div class="app-toolbar__locale-switcher">
                <span class="sr-only" id="locale-selector-label">{{ t('toolbar.localeLabel') }}</span>
                <pv-select-button
                    v-model="selectedLocale"
                    :options="localeOptions"
                    option-label="label"
                    option-value="value"
                    :aria-labelledby="'locale-selector-label'"
                />
            </div>
        </template>
    </pv-toolbar>
</template>

