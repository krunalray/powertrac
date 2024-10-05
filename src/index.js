import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/assets/scss/style.scss';
import './assets/fontawesome/scss/fontawesome.scss';
import './assets/fontawesome/scss/regular.scss';
import './assets/fontawesome/scss/solid.scss';
import './assets/fontawesome/scss/brands.scss';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/css/theme.scss';
import './assets/css/theme_responsive.scss';
import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
