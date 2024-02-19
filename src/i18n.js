import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['layout', 'articles', 'contact', 'projects', 'kasa', 'nina', 'qwenta', 'quizzes', 'ports', 'portsquiz',
    'sophie', 'cozybot', 'cozybotinvite', 'dihia', 'notfound', 'loading', 'http', 'httpquiz'],
    defaultNS: 'layout',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
