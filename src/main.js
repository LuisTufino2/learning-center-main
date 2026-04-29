import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { Button, Card, SelectButton, Tag, Toolbar } from 'primevue';
import i18n from './i18n.js';
import router from './router.js';
import pinia from './pinia.js';

createApp(App)
    .use(i18n)
    .use(router)
    .use(pinia)
    .use(PrimeVue, { theme: { preset: Material }, ripple: true })
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-tag', Tag)
    .component('pv-toolbar', Toolbar)
    .mount('#app');
