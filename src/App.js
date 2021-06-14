import logo from './logo.svg';
import './App.css';
import { FormattedMessage, IntlProvider } from "react-intl";
import React, { useState, useEffect } from 'react';
import MyMainArea from './MyMainArea';

function App() {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(undefined)

useEffect(async() => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  },[lang])

  return (
    <IntlProvider 
      messages={locale}
    >
      <div>
          {/* <MyMainArea /> */}
          <div>
            <select
              value={lang}
              onChange={(evt) => {
                setLang(evt.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="cn">中文</option>
              <option value="fr">Français</option>
              <option value="jp">日本語</option>
            </select>
          </div>
          <p>
            <FormattedMessage
              id="app.header"
              defaultMessage="Edit src/App.js and save to reload."
            />
          </p>
          <a>
            <FormattedMessage id="app.content" defaultMessage="Learn React" />
          </a>
      </div>
    </IntlProvider>
  );
}

export default App;
