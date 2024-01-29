import i18n from "i18n";

const Languages = {
    gr: "gr",
    English: "en",
    French: "fr",
    German: "German",
    Italian: "Italian",
    Spanish: "Spanish"
};


export default function initi18n() {
    // Check if Languages is an object and not undefined or null
    if (Languages && typeof Languages === 'object') {
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
    } else {
        console.error("Languages is not properly defined. Check your import statement.");
    }
}

export { i18n };

export function inlineLocale(locale, text, ...params) {
    i18n.setLocale(locale);
    return i18n.__(text, ...params);
}

/**
 * @param {string} textKey - The key for the translated text.
 * @param {object} [params] - Optional parameters for text interpolation.
 * @returns {string} - The translated text.
 */
export function translate(textKey, params) {
    return inlineLocale(textKey, params ? { ...params } : undefined);
}
