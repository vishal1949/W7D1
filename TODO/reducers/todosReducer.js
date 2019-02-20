import  {RECEIVE_TODOS}  from "../actions/todo_actions";
import  {RECEIVE_TODO}  from "../actions/todo_actions";


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {
  // debugger
  switch(action.type){
    case RECEIVE_TODOS:
      return todosToObject(state, action.todos);  // or ...action.todos // spreading the state and adding in the action.todos array
    case RECEIVE_TODO:
      return todoToObject(state, action.todo);
    default: 
      return state;
  }
}

const todoToObject = (oldState, todo) => { //populates newState and keys in the todo
  let newState = {};
  for (let i = 1; i <= Object.keys(oldState).length; i++) {
    newState[i] = oldState[i];
  }
  newState[todo.id] = todo;
  return newState;
}

//todo is one obj

const todosToObject = (oldState, todos) => { //populates (newState) and adds in todos objects
  let totalLength = Object.keys(oldState).length + todos.length + 1;

  let newState = {};
  for(let i = 1; i <= Object.keys(oldState).length; i++){
    newState[i] = oldState[i];
  }
  let j = 0;
  for (let i = Object.keys(newState).length + 1; i < totalLength; i++ ){
    newState[todos[j].id] = todos[j];
    j++;
  }
  return newState;
  
}


// let obj = {};
// for(let i = 1; i <= oldState.length; i++){ //
//   console.log(oldState[i]);
//   obj[i] = oldState[i];
//   console.log(obj[i]);
// }
// // let j = 0;
// // for(let i = obj.length; i < (todosArr.length + obj.length); i++){
// //   obj[i] = todosArr[j];
// //   j++;
// // }