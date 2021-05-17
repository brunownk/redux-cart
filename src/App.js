import React from 'react';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Routes from './routes/index';
import GlobalStyle from './styles/global';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </Router>
  );
};

export default App;
