import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

/*
 * согласен, получается, нам надо в App вставить хедер, роутер, футер. а в хедере уже navMenu
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
