
//entry file

import React from 'react'
import ReactDOM from 'react-dom'
import {receiveTodos} from '../actions/todo_actions'
import {receiveTodo} from '../actions/todo_actions'
import Redux from 'redux'
import configureStore from '../store/store'
import App from "./components/app"
import Root from "./components/root"
import allTodos from '../reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.selector = allTodos;
  ReactDOM.render(<Root store={store} dog={"corgi"}/>, root)
  // ReactDOM.render(<h1>SOMETHING HERE</h1>, root)
});
