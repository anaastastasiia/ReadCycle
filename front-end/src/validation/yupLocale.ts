import * as yup from 'yup';
import i18n from '../i18n';

yup.setLocale({
  mixed: {
    required: () => i18n.t('errors:validation.required'),
    oneOf: () => i18n.t('errors:validation.createBook.category'),
  },
  string: {
    matches: () => i18n.t('errors:validation.createBook.year'),
  },
  number: {
    // @ts-expect-error yup typeError is not typed but it works
    typeError: () => i18n.t('errors:validation.createBook.priceNumber'),
    positive: () => i18n.t('errors:validation.createBook.pricePositive'),
  },
});
