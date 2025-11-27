import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import nl from './locales/nl.json'
import ru from './locales/ru.json'
import ua from './locales/ua.json'

const resources = {
   en: {
      translation: en,
   },
   fr: {
      translation: fr,
   },
   nl: {
      translation: nl,
   },
   ru: {
      translation: ru,
   },
   ua: {
      translation: ua,
   }
}

i18n.use(initReactI18next).init({
   resources,
   lng: 'en',
   fallbackLng: 'en',
   interpolation: {
      escapeValue: false,
   },
})

export default i18n
