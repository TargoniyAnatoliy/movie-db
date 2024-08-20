import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

/* setup axios */
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzcxYTc2NjdjN2Y5MzVhMGVmMGU2NDI1YTQ0ZGZhOSIsIm5iZiI6MTcyNDAwNjMzMS40NTg0ODUsInN1YiI6IjY2YmUzMTk0NTk2YzBiZmIwMzliODM5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57F-mkhSQyPc_Q5tyso0QozEn_634fTt_xmMKdvU4T0`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
