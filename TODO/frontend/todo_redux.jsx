
import React from 'react'
import ReactDOM from 'react-dom'

import Redux from 'redux'
import configureStore from '../store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>SOMETHING HERE</h1>, root)
});

// window.store = configureStore();