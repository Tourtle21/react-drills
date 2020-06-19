import React, {Component} from 'react';
import List from './Components/List'
import NewTask from './Components/NewTask'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],

    }
  }

  addTodo = (val) => {
    let todoList = this.state.todos.slice();
    todoList.push(val);
    this.setState({todos:todoList});
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask change={this.addTodo}/>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
