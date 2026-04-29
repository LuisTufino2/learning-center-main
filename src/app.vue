<script setup>
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import AppFooter from './shared/presentation/components/app-footer.vue';
import AppToolbar from './shared/presentation/components/app-toolbar.vue';
import { availableLocales } from './i18n.js';

const { locale } = useI18n();

const localeOptions = computed(() => availableLocales.map(localeCode => ({
	label: localeCode.toUpperCase(),
	value: localeCode,
})));

watch(locale, value => {
	window.localStorage.setItem('learning-center-locale', value);
}, { immediate: true });
</script>

<template>
	<div class="app-shell">
		<app-toolbar v-model:locale="locale" :locale-options="localeOptions" />

		<main class="app-shell__main">
			<router-view />
		</main>

		<app-footer />
	</div>
</template>
