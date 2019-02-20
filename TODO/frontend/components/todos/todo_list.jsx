import React from 'react';
// import allTodos from '../../../reducers/selectors';
import TodoForm from './todo_form'


export const TodoList = (props) => {
  const todos = props.todos.map(todo => <li> { todo.title } </li>);
  debugger
  return ( 
    <>
      <marquee>
        <h1>TODOS List</h1>
      </marquee>
      <TodoForm receiveTodo={props.receiveTodo}/>
      {todos} 
    </>
  );
}



