import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMainArea from './MyMainArea';
import MySide from './MySide';
//
import { FormattedMessage, IntlProvider } from "react-intl";
import { useState, useEffect } from 'react';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <MyMainArea />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);