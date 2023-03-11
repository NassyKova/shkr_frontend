import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// axios.defaults.baseURL="https://www.thecocktaildb.com/api/json/v2/9973533"
// axios.defaults.baseURL="http://localhost:5000"
axios.defaults.baseURL="https://shakr-backend-production.up.railway.app/"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
