import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  // todo: todoReducer
})

export default rootReducer;   