import React, {Component} from 'react';
import List from './Components/List'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['Kaden', 'Katey', 'Kademan', 'Brock', 'Eliza', 'Cheetohs', 'Backflip', 'Break', 'Battles'],
      filteredList: ['Kaden', 'Katey', 'Kademan', 'Brock', 'Eliza', 'Cheetohs', 'Backflip', 'Break', 'Battles'],
    }
  } 

  handleInput(val) {
    let newList = [];
    if (val === '') {
      newList = this.state.list;
    } else {
      newList = this.state.list.filter(name => name.includes(val));
    }
    this.setState({
      filteredList: newList
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleInput(e.target.value)}/>
        <List list={this.state.filteredList}/>
      </div>
    );
  }
}

export default App;
