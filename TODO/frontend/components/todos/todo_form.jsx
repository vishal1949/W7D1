import React from 'react';



class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: '' 
    }
    this.updateState= this.updateState.bind(this);
  }

  updateState(e){
    e.preventDefault();
    this.setState({todo: e.currentTarget.value})
  }

  dothis(e){
    e.preventDefault();
    console.log("GOT HERE");
  }

  render(){
    return (
    <form>
      <label>What TODO?  </label>
      <input type="text" onChange={this.updateState } value={this.state.todo}/> 

      <input type="submit" onClick={this.dothis} value="submit"/>
    </form>);
  }
}


export default TodoForm;