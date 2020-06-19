import React, {Component} from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      userInput: '',
    }
  }


  handleInput(val) {
    this.setState({
      userInput: val
    })
  }

  addTodo = () => {
    let todoList = this.state.todos.slice();
    todoList.push(this.state.userInput);
    this.setState({todos:todoList});
  }

  render() {
    const mappedTodos = this.state.todos.map((item, i) => (<Todo key={i} item={item}/>));
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e) => this.handleInput(e.target.value)}/>
        <button onClick={this.addTodo}>Add</button>
        {mappedTodos}
      </div>
    );
  }
}

export default App;
