import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContextProvider } from './context/userContext'

import Header from "./components/header";
import Footer from "./components/footer";

// favicon
import Favicon from './assets/DumbMerch.png'
const favicon = document.getElementById('idFavicon')
favicon.setAttribute('href', Favicon)


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Header />
        <App />
      <Footer />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();