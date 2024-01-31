import i18n from "i18n";

const Languages = {
    gr: "gr",
    en: "en",
    fr: "fr",
    de: "de",
    it: "it",
    es: "es"
};


export default function initi18n() {
        i18n.configure({
            locales: Object.values(Languages),
            defaultLocale: "gr",
            autoReload: true,
            updateFiles: false,
            syncFiles: false,
            extension: ".json",
            directory: "./app/data/Locales",
            retryInDefaultLocale: true,
            objectNotation: true,
            register: global,
            logWarnFn: function (msg) {
                console.log("i18n Warning: ", msg);
            },
            logErrorFn: function (msg) {
                console.log("i18n Error: ", msg);
            },
            missingKeyFn: function (locale, value) {
                return value;
            },
            mustacheConfig: {
                tags: ["{{", "}}"],
                disable: false,
            },
        });
        console.log("i18n configured");
}

export { i18n };

export function inlineLocale(locale, text, ...params) {
    console.log("i18n setLocale:", locale);
    i18n.setLocale(locale);
    console.log("i18n setLocale completed");
    return i18n.__(text, ...params);
}

/**
 * @param {string} textKey - The key for the translated text.
 * @param {object} [params] - Optional parameters for text interpolation.
 * @returns {string} - The translated text.
 */
export function translate(locale, textKey, params) {
    console.log("translate textKey:", textKey);
    console.log("translate params:", params);
    return inlineLocale(locale, textKey, params ? { ...params } : undefined);
}
