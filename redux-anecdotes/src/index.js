import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';
import anecdoteService from './services/anecdotes';
import noteReducer, { setAnecdotes } from './reducers/anecdoteReducer';

anecdoteService
  .getAll()
  .then((anecdotes) => store.dispatch(setAnecdotes(anecdotes)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
