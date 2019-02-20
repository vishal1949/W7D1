
import { createStore } from 'redux'
import rootReducer from '../reducers/root_reducer'
import { receiveTodos } from '../actions/todo_actions'
import { receiveTodo } from '../actions/todo_actions'

const configureStore = (preloadedState = {}) => ( //implicitly
  createStore(rootReducer, preloadedState)
);


export default configureStore;