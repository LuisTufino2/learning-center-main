import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

export const availableLocales = ['en', 'es'];

const storedLocale = typeof window !== 'undefined'
    ? window.localStorage.getItem('learning-center-locale')
    : null;

const initialLocale = availableLocales.includes(storedLocale) ? storedLocale : 'en';

const i18n = createI18n({
    legacy: false,
    locale: initialLocale,
    fallbackLocale: 'en',
    messages: { en, es },
});

export default i18n;