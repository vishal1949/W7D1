import { connect } from "redux";

export const RECEIVE_TODOS = 'RECEIVE_TODOS'; //lets the reduccer know to reset the list of todos
export const RECEIVE_TODO = 'RECEIVE_TODO';

const receiveTodos = (todos) => {
  return{
    type: RECEIVE_TODOS,
    todos: todos //todos array
  }
};

const receiveTodo = (todo) => { //this is the action creat
  //the return is the action itself
  return{
    type: RECEIVE_TODO,
    todo: todo 
  };
};


export default receiveTodos;

