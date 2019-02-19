import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  todosReducer: todosReducer // potentially changing the key
})

export default rootReducer;   