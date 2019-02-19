import  RECEIVE_TODOS  from "../actions/todo_actions";
import  RECEIVE_TODO  from "../actions/todo_actions";


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


const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_TODOS:
      return todosToObject(state, action.todos);  // or ...action.todos // spreading the state and adding in the action.todos array
    default: 
      return state;
  }
}

const todosToObject = (oldState, todos) => {
  let totalLenth = Object.keys(oldState).length + todos.length + 1;

  let obj = {};
  for(let i = 1; i <= Object.keys(oldState).length; i++){
    obj[i] = oldState[i];
  }
  let j = 0;
  for (let i = Object.keys(obj).length + 1; i < totalLenth; i++ ){
    obj[i] = todos[j];
    j++;
  }
  return obj;
  
}

export default todosReducer;
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