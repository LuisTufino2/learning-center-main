<!--
  @summary Main exploration page that lists the US presidents.
  @author GitHub Copilot
-->
<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePresidentsStore } from '../../application/presidents.store.js';
import PresidentCard from '../components/president-card.vue';

const { t } = useI18n();
const presidentsStore = usePresidentsStore();

onMounted(() => {
    if (!presidentsStore.hasLoaded) {
        presidentsStore.fetchPresidents();
    }
});
</script>

<template>
    <section class="home-view" aria-labelledby="us-presidents-heading">
        <header class="home-view__header">
            <p class="home-view__eyebrow">{{ t('presidents.eyebrow') }}</p>
            <h1 id="us-presidents-heading" class="home-view__title">{{ t('presidents.title') }}</h1>
            <p class="home-view__description">{{ t('presidents.description') }}</p>
        </header>

        <section v-if="presidentsStore.isLoading" class="home-view__state" aria-live="polite">
            <p>{{ t('presidents.loading') }}</p>
        </section>

        <section v-else-if="presidentsStore.error" class="home-view__state home-view__state--error" role="alert">
            <p>{{ t('presidents.error') }}</p>
            <pv-button :label="t('presidents.retry')" icon="pi pi-refresh" @click="presidentsStore.fetchPresidents()" />
        </section>

        <div v-else class="president-grid" aria-label="US Presidents list">
            <president-card
                v-for="president in presidentsStore.presidents"
                :key="president.id"
                :president="president"
            />
        </div>
    </section>
</template>

