import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import home_es from "./translations/es/home.json"
import home_en from "./translations/en/home.json"
import contact_es from "./translations/es/contact.json"
import contact_en from "./translations/en/contact.json"
import themes_es from "./translations/es/themes.json"
import themes_en from "./translations/en/themes.json"
import policy_es from "./translations/es/policy.json"
import policy_en from "./translations/en/policy.json"
import AuthUser from './components/Context/AuthUser.jsx'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      home: home_es,
      contact: contact_es,
      themes: themes_es,
      policy: policy_es
    },
    en: {
      home: home_en,
      contact: contact_en,
      themes: themes_en,
      policy: policy_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthUser>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </AuthUser>
)
