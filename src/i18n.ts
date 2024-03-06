import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // loads translations from a server
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    fallbackLng: 'dk', // use en if detected lng is not available
    debug: true, // set to false in production
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // optional: configure the backend plugin
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // path to load translations
    },
  });

export default i18n;
