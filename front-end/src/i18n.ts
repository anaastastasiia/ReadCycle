import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../public/locales/en';
import pl from '../public/locales/pl';
import ua from '../public/locales/ua';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: en.translation,
        pl: pl.translation,
        ua: ua.translation,
    },
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;