// This file is used to create a new instance of i18next for the server side.

// Import the i18next library
import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';
import { RemixI18Next } from 'remix-i18next/server';
import i18n from './i18n';

// Create a new instance of i18next
let i18next = new RemixI18Next({
    detection: {
        supportedLanguages: i18n.supportedLngs,
        fallbackLanguage: i18n.fallbackLng,
    },
    i18next: {
        ...i18n,
        backend: {
            loadPath: resolve('../../public/locales/{{lng}}/{{ns}}.json'),
        },
    },
    plugins: [Backend],
});

// Export the instance
export default i18next;