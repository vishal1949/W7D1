const allTodos = (state) => {
  return Object.keys(state.todos).map(id => state.todos[id]); // think this is an array of objects with their id as index
}

export default allTodos;