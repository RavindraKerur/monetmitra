import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/slick-carousel/slick/slick.css'; 
import '../node_modules/react-circular-progressbar/dist/styles.css';
import './assets/css/font-awesome.css';
import './assets/font/flaticon.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('loanly')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
