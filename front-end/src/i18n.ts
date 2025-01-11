import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import en from '../public/locales/en';
import pl from '../public/locales/pl';
import ua from '../public/locales/ua';

i18n.use(initReactI18next).init({
    resources: {
        en,
        pl,
        ua
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;