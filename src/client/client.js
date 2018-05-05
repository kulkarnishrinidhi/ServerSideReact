// Starter point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import reducers from './reducers';

// createStore is used to make a redux store
// applyMiddleware is used to hookup middlewares in our application
import { createStore, applyMiddleware } from 'redux';

// Thunk is used to handle async action creators
import thunk from 'redux-thunk';

// Provider ties redux store to React side of our application
// passes data from store to connected components.
import { Provider } from 'react-redux'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));