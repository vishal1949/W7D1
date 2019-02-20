import React from 'react';
import TodoListContainer from './todos/todo_list_container'
//presentation component 

// +
// lifecycle methods
// this.state (not redux state)

// - 
//not very light weight
class App extends React.Component {
  render() {
    return <TodoListContainer />
  }
}

export default App;

// const vs let 
// functional => presentation component 